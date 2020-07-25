const mongoose = require('mongoose');
const crypto = require('crypto');
const uuidv1 = require('uuid/v1');

//user schema
const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32,
            unique: true
        }
    },
    { timestamps: true }
);

 // method creat new model
 module.exports = mongoose.model("Category", categorySchema);