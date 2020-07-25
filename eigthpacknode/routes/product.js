const express = require('express');
const router = express.Router();

const { create, productById, read, remove, update, list, listRelated, listsubCategories, listCategories, listBySearch, photo, photoTwo, photoThree, listSearch } = require('../controllers/product');
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");


// url routers 
router.get('/product/:productId', read)
router.post('/product/create/:userId', requireSignin, isAuth, isAdmin, create);
router.delete('/product/:productId/:userId', requireSignin, isAuth, isAdmin, remove);
router.put('/product/:productId/:userId', requireSignin, isAuth, isAdmin, update);

router.get('/products', list);
router.get("/products/search", listSearch);
router.get('/products/related/:productId', listRelated)
router.get('/products/subcategories', listsubCategories);
router.get('/products/subcategories/category', listCategories);
router.post('/products/by/search', listBySearch);
router.get('/product/photo/:productId', photo);
router.get('/product/photoTwo/:productId', photoTwo);
router.get('/product/photoThree/:productId', photoThree);



router.param('userId', userById);
router.param('productId', productById);

module.exports = router;