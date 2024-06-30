const express = require("express");
const { User, Product } = require("../db");

const profileRouter = express.Router();

profileRouter.get("/", async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.userId });
        if (!user){
            return res.status(401).json({
                message: "Something went wrong!"
            });
        }
        return res.status(200).json({
            userId: user._id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            address: user.address,
            wishlist: user.wishlist,
            cart: user.cart,
            orders: user.orders
        })
    } catch(e) {
        console.log("error --->", e)
        return res.status(411);
    }
});

profileRouter.get("/orders", async (req, res) => {
    const user = await User.findOne({ _id: req.userId }); 
    if (!user){
        return res.status(411).json({
            message: "Something went wrong"
        })
    };

    const products = await Product.find({
        _id: { $in: user.orders }
    });
    res.status(200).json({
        products
    });

});

profileRouter.get("/wishlist", async (req, res) => {
    const user = await User.findOne({ _id: req.userId }); 
    if (!user){
        return res.status(411).json({
            message: "Something went wrong"
        })
    };

    const products = await Product.find({
        _id: { $in: user.wishlist }
    });
    return res.status(200).json({
        products
    });

});

profileRouter.get("/cart", async (req, res) => {
    const user = await User.findOne({ _id: req.userId });
    if (!user){
        return res.status(411).json({
            message: "Something went wrong"
        })
    };
    const products = await Product.find({
        _id: { $in: user.cart }
    });
    return res.status(200).json({
        products
    });

});

profileRouter.put("/cart/checkout", async (req, res) => {
    const user = await User.findOne( { _id: req.userId } );
    if (!user) {
        return res.status(411).json({
            message: "Something went wrong"
        })
    }

    user.orders = user.orders.concat(user.cart);
    user.cart = [];
    await user.save();

    return res.status(200).json({
        message: "Orders Placed"
    })
});

module.exports = { profileRouter }