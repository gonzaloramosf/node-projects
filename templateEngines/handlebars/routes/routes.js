const express = require('express');
const router = express.Router();
const Products = require('../products/products');
const {json} = require("express");
let product = new Products();

router.get('/products', async(req, res) => {
    let products = await product.getProducts();
    console.log(products);
    res.render('products', {products, hasAny: products.length >= 1 ? true : false});
})

router.get('/', async(req, res) => {
    res.render('addProduct')
})

router.post('/products', async(req, res) => {
    const { title, price } = req.body;
    await product.addProduct({ title, price });
    res.json(201);
})

module.exports = router;