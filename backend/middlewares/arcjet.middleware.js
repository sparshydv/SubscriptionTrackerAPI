import aj from "../config/arcjet.js";

const arcjetMiddleware = async (req, res, next) => {
    try {
        if (!aj) {
            return next();
        }

        // Detect client IP behind proxies
        const clientIp = (req.headers['x-forwarded-for']?.split(',')[0]?.trim())
            || req.ip
            || req.socket?.remoteAddress;

        // If IP is missing (e.g. some proxy/health-check requests), skip Arcjet for this request
        // to avoid fingerprint errors caused by empty ip characteristics.
        if (!clientIp) {
            console.warn('Arcjet warning: missing client IP, skipping protection for this request.');
            return next();
        }

        const decision = await aj.protect(req, {
            requested: 1,
            characteristics: { ip: clientIp }
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
            console.warn('Arcjet warning: fingerprint skipped due to empty IP.');
            return next();
        }
        next(error);
    }
}

export default arcjetMiddleware;
