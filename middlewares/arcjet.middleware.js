import aj from "../config/arcjet.js";

const arcjetMiddleware = async (req, res, next) => {
    try {
        // Detect client IP behind proxies
        const clientIp = (req.headers['x-forwarded-for']?.split(',')[0]?.trim())
            || req.ip
            || req.socket?.remoteAddress;

        // Only include IP if non-empty
        const characteristics = clientIp ? { ip: clientIp } : {};

        const decision = await aj.protect(req, {
            requested: 1,
            characteristics
        });

        if (decision.isDenied()) {
            if (decision.reason.isRateLimit()) 
                return res.status(429).json({ error: 'rate limit exceeded' });
            if (decision.reason.isBot()) 
                return res.status(403).json({ error: 'bot detected' });

            return res.status(403).json({ error: 'Access denied' });
        }

        next();

    } catch (error) {
        if (typeof error?.message === 'string' && error.message.includes('ip') && error.message.includes('empty')) {
            console.warn("Arcjet warning: missing client IP, skipping fingerprint.");
            return next();
        }
        next(error);
    }
}

export default arcjetMiddleware;
