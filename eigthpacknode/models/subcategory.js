const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema; 

//subcategory schema
const subcategorySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    category: {
        type: ObjectId,
        ref: 'Category',
        required: true
    },
    photo: {
        data: Buffer,
        contentType: String
    },
}, { timestamps: true});

 // method creat new model
 module.exports = mongoose.model("Subcategory", subcategorySchema);






