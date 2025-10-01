import aj from "../config/arcjet.js";

const arcjetMiddleware = async (req, res, next) => {
    try{
        // Ensure Arcjet receives a concrete client IP when behind a proxy (Render)
        const clientIp = (req.headers['x-forwarded-for']?.split(',')[0]?.trim())
            || req.ip
            || req.socket?.remoteAddress
            || '';

        const decision = await aj.protect(req, { requested: 1, ip: clientIp });

        if(decision.isDenied()){
            if(decision.reason.isRateLimit()) return res.status(429).json({error: 'rate limit exceeded'});
            if(decision.reason.isBot()) return res.status(403).json({error: 'bot detected'});

            return res.status(403).json({error: 'Access denied'});
        }

        next();

    }
    catch(error){
        console.error("Arcjet middleware error:", error);
        // If Arcjet fails due to missing IP, allow the request instead of breaking the app
        if (typeof error?.message === 'string' && error.message.includes('ip') && error.message.includes('empty')) {
            return next();
        }
        next(error);
    }
}

export default arcjetMiddleware;