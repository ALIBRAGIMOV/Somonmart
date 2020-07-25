const express = require('express')();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const ecommerceRoutes = require('./routes/ecommerce')
const cors = require('cors');
const expressValidator = require('express-validator');
require('dotenv').config();


//import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const subcategoryRoutes = require('./routes/subcategory');
const productRoutes = require('./routes/product');
 

// app
const app = express;


// mongoose
mongoose.connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => console.log("DB Connected")).catch(err => {
    console.log(err);
});


// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
// cors
if (process.env.NODE_ENV === 'development') {
    app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}

// routes middleware
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);
app.use('/api', subcategoryRoutes);
app.use('/api', productRoutes);
app.use('/api', ecommerceRoutes);

const port = process.env.Port || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})