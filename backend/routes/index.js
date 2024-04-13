const express = require("express");
const { exploreRouter } = require("./explore");
const { userRouter } = require("./user");
const { authMiddleware } = require("../middleware");
const { profileRouter } = require("./profile");

const apiRouter = express.Router();

// apiRouter.use("/home", homeRouter)
apiRouter.use("/explore", exploreRouter)
apiRouter.use("/user", userRouter)
apiRouter.use("/profile", authMiddleware , profileRouter)


module.exports = { apiRouter }