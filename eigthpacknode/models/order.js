const mongoose = require('mongoose');

//user schema
const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: 32
    },
    phone: {
        type: String,
        trim: true,
        required: true,
        unique: 32
    },
    adress: {
        type: String,
        trim: true,
        required: true,
        unique: 32
    },
    product: {
        type: Array,
    },
    amountPrice: {
        type: Array,
    },
    countProduct: {
        type: Array,
    }
}, { timestamps: true});

module.exports = mongoose.model("Order", orderSchema);