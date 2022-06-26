const express = require('express');
const router = express.Router();
const Products = require('../products/products');
const {json} = require("express");
let product = new Products();

router.get('/', async(req, res) => {
    let products = await product.getProducts();
    console.log(products);
    res.render('addProduct', {products, hasAny: products.length >= 1 ? true : false});
})

router.post('/products', async(req, res) => {
    const { title, price } = req.body;
    await product.addProduct({ title, price });
})

module.exports = router;