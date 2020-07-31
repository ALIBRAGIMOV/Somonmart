const Order = require('../models/order');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.create = (req, res) => {
    console.log("req.body", req.body);
    const order = new Order(req.body);
    order.save((err, user) => {
        if (err) {
            return res.status(400).json({
                err: errorHandler(err)
            });
        }
        res.json({
            user
        })
    }) 
}