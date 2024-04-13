const mongoose = require("mongoose");

mongoose.connect("DATABASE_URL")  // <--- Create a database

const userSchema = mongoose.Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    address: String,
    wishlist: Array,
    cart: Array,
    orders: Array
});

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    // Product Stock and colors logic
})

const User = mongoose.model("User", userSchema);
const Product = mongoose.model("Product", productSchema);

module.exports = { User, Product }
