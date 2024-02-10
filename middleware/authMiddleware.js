const jwt = require('jsonwebtoken');

const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        console.error('Token verification failed:', error);
        return null;
    }
};

const authMiddleware = (req, res, next) => {
    try {
        const authorizationHeader = req.headers.authorization;

        if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const token = authorizationHeader.split(' ')[1];
        const decodedToken = verifyToken(token);

        if (!decodedToken || !decodedToken.userId) {
            console.error('Invalid token or missing userId:', decodedToken);
            return res.status(401).json({ error: 'Invalid token' });
        }

        console.log('Decoded user:', decodedToken);
        
       
        req.user = decodedToken;

        next();
    } catch (error) {
        console.error('Error in auth middleware:', error);
        res.status(401).json({ error: 'Unauthorized' });
    }
};

module.exports = authMiddleware;
