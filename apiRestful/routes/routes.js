const express = require('express');
const router = express.Router();
const Products = require('../products/products');
const {json} = require("express");
let product = new Products();

router.get('/products', async(req, res) => {
    res.json(await product.getProducts());
})

router.get('/products/:id', async(req, res) => {
    let productId = req.params.id;
    res.json(await product.getProductById(productId));
})

router.post('/products', async(req, res) => {
    const { title, price } = req.body;
    await product.addProduct({ title, price });
    res.json(201);
})

router.put('/products/:id', async(req, res) => {
    let productId = req.params.id;
    const {title, price} = req.body;
    await product.updateProductById(productId, {title, price});
    res.json(201);
})

router.delete('/products/:id', async (req, res) => {
    let productId = req.params.id;
    res.json(await product.deleteProductById(productId));
})

module.exports = router;