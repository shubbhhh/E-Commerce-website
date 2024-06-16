const jwt = require("jsonwebtoken");
const { JWT_Secret } = require("./config");

const authMiddleware = (req, res, next) => {
    console.log("control at middleware")
    const token = req.headers.authorization;
    console.log(token)

    if (!token) {
        res.status(401).json({ message: "not logged in"})
    }

    try {
        const decoded = jwt.decode(token, JWT_Secret);
        // console.log(decoded.userId);
        req.userId = decoded.userId;
        next();
        return res.status(200)
    
    } catch(err) {
        return res.status(401).json({});
    }
};

module.exports = { authMiddleware };