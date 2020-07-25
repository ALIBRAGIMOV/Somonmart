const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema; 

//product schema
const porductSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    description: {
        type: String,
        required: true,
        maxlength: 2000
    },
    price: {
        type: Number,
        trim: true,
        required: true,
        maxlength: 32
    },
    subcategory: {
        type: ObjectId,
        ref: 'Subcategory',
        required: true
    },
    quantity: {
        type: Number
    },
    sold: {
        type: Number,
        default: 0
    },
    photo: {
        data: Buffer,
        contentType: String,
        
    },
    photoTwo: {
        data: Buffer,
        contentType: String,
    },
    photoThree: {
        data: Buffer,
        contentType: String,
    },
    shipping: {
        required: false,
        type: Boolean
    }
}, 
{ timestamps: true});

 // method creat new model
 module.exports = mongoose.model("Product", porductSchema);