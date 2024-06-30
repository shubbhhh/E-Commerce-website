const jwt = require("jsonwebtoken");
const { JWT_Secret } = require("./config");

const authMiddleware = async (req, res, next) => {
    console.log("control at middleware")
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({
            message: "not logged in"
        })
    }

    try {
        const decoded = jwt.decode(token, JWT_Secret);
        req.userId = decoded.userId;
        next();
        return res.status(200)
    } catch(err) {
        console.log("Error-->", err)
        return res.status(401).json({});
    }
};

module.exports = { authMiddleware };