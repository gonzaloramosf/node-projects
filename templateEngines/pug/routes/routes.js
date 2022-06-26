const express = require('express');
const router = express.Router();
const Products = require('../products/products');
const {json} = require("express");
let product = new Products();

router.get('/products', async(req, res) => {
    try {
        let products = await product.getProducts();
        res.render('products.pug', {products, hasAny: products.length >= 1 ? true : false});
    } catch (err) {
        console.log(err);
    }
})

router.get('/', async(req, res) => {
    res.render('addProducts.pug')
})

router.post('/products', async(req, res) => {
    try {
        const {title, price} = req.body;
        await product.addProduct({title, price});
        res.json(201);
    } catch (err) {
        console.log(err);
        res.json(400);
    }
})

module.exports = router;