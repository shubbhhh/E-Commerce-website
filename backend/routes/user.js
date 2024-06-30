const express = require("express");
const { User } = require("../db");
const zod = require("zod");
const JWT = require("jsonwebtoken");
const { JWT_Secret } = require("../config");

const userSignUpSchema = zod.object({
    email: zod.string(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string(),
    address: zod.string(),
    wishlist: zod.array(),
    cart: zod.array(),
    orders: zod.array()
});

const userSignInSchema = zod.object({
    email: zod.string(),
    password: zod.string()
});

const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
    const user = req.body
    if (!userSignUpSchema.safeParse(user)) {
        return res.status(411).json({
            message: "Invalid Inputs!!"
        })
    }

    if (await User.findOne({ email: user.email })) {
        return res.status(411).json({
            message: "User already exsits"
        })
    }
    const newUser = new User({
        email: user.email,
        password: user.password,
        firstName: user.firstName,
        lastName: user.lastName,
        address: user.address,
        wishlist: [],
        cart: [],
        orders: []
    });

    await newUser.save()
    const userId = newUser._id

    const token = JWT.sign({ userId: userId }, JWT_Secret);

    return res.status(200).json({
        message: 'User Created.',
        token: token
    })
});

userRouter.post("/signin", async (req, res) => {
    if (!userSignInSchema.safeParse(req.body)) {
        return res.status(411).json({
            message: "Invalid input!"
        });
    }

    const isUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    })
    if (!isUser) {
        return res.status(411).json({
            message: "User does not exists"
        })
    }

    const token = JWT.sign({ userId: isUser._id }, JWT_Secret);
    return res.status(200).json({
        token,
        _id: isUser._id
    })
});

module.exports = { userRouter }