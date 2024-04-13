const jwt = require("jsonwebtoken");
const { JWT_Secret } = require("./config");

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        res.status(403).json({})
    }

    try {
        const decoded = jwt.decode(token, JWT_Secret);
        console.log(decoded);
        req.userId = decoded.userId;
        next();
    
    } catch(err) {
        return res.status(411).json({});
    }
};

module.exports = { authMiddleware };