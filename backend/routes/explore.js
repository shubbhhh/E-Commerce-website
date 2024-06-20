const express = require("express");
const { Product, User } = require("../db");
const { authMiddleware } = require("../middleware");

const exploreRouter = express.Router();

exploreRouter.get("/", async (req, res) => {
    const filter = req.query?.filter || ""

    const products = await Product.find({
        $or: [{
            name: {
                "$regex": filter
            }
        }]
    });

    console.log(products)

    return res.status(200).json({
        products: products.map(product => ({
            productName: product.name,
            productPrice: product.price,
            _id: product._id
        }))
    });
});

// middleware check!! PUT: "/addToCart" <--- Product ID
exploreRouter.put("/addtocart", authMiddleware, async (req, res) => {
    console.log("--> adding to cart")
    console.log(req.body)
    try {
        await User.findOneAndUpdate(
            { _id: req.userId },
            { $push: { cart: req.body.product._id } }
        )
    } catch(err) {
        return res.status(411).json({
            message: "Something went wrong"
        })
    }

    return res.status(200).json({
        message: "Item added to cart"
    });
});

// middleware check!! PUT: "/orderProduct" <--- Product ID
exploreRouter.put("/orderproduct", authMiddleware, async (req, res) => {
    try {
        await User.findOneAndUpdate(
            { _id: req.userId },
            { $push: { orders: req.body._id } }
        )

    } catch(err) {
        return res.status(411).json({
            message: "Something went wrong"
        })
    }

    return res.status(200).json({
        message: "Item ordered"
    });
});

// order Cart

// middleware check!! PUT: "/addToWishlist" <--- Product ID
exploreRouter.put("/addtowishlist", authMiddleware, async (req, res) => {
    try {
        await User.findOneAndUpdate(
            { _id: req.userId },
            { $push: { wishlist: req.body._id } }
        )
    } catch(err) {
        console.log(err)
        return res.status(411).json({
            message: "Something went wrong"
        })
    }
    return res.status(200).json({
        message: "Item added to wishlist"
    });
});

module.exports = { exploreRouter }