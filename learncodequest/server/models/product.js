const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    index: {
        type: String,
        required: true,
        unique: true
    },
    productName: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    productCategory: {
        type: String,
        required: true
    }    
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;