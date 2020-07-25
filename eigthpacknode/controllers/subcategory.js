const Subcategory = require('../models/subcategory');
const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');
const { errorHandler } = require('../helpers/dbErrorHandler');


exports.subcategoryById = (req, res, next, id) => {
    Subcategory.findById(id).exec((err, subcategory) => {
        if (err || !subcategory){
            return res.status(400).json({
                error: 'Subcategory does not exis'
            })
        }
        req.subcategory = subcategory;
        next()
    })
}

exports.create = (req, res) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        if(err){
            return res.status(400).json({
                error: 'Image could not be uploaded'
            })
        }
        // check for all fields
        const {name, category} = fields
        if(!name || !category){
            return res.status(400).json({
                error: 'All fields are required'
            });
        }
        

        let subcategory = new Subcategory(fields)

        // 1kb = 1000
        // 1mb = 1 000 000

        if(files.photo){
           // console.log('FILES PHOTO: ', files.photo)
           if(files.photo.size > 1000000){
            return res.status(400).json({
                error: 'Image should be less 1mb in size'
            });
           }
            subcategory.photo.data = fs.readFileSync(files.photo.path)
            subcategory.photo.contentType = files.photo.type
        }
        subcategory.save((err, result) => {
            if(err){
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(result);
        });
    });
};


exports.read = (req, res) => {
    return res.json(req.subcategory);
}

exports.update = (req, res) => {
    const subcategory = req.subcategory;
    subcategory.name = req.body.name;
    subcategory.save((err, data) => {
        if(err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    })
}

exports.remove = (req, res) => {
    const subcategory = req.subcategory;
    subcategory.name = req.body.name;
    subcategory.remove((err, date) => {
        if(err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({message: 'Subcategory deleted'});
    })
}

exports.list = (req, res) => {
    Subcategory.find().exec((err, data) => {
        if(err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data)
    })
}