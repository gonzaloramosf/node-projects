const express = require('express');
const router = express.Router();
const Products = require('../products/products');
const User = require('../userRol/user');
const Cart = require('../cart/cart');
const {json} = require("express");
let product = new Products();
let user = new User();
let cart = new Cart();

let rol = false;

// user route
router.post("/user", async(req, res) => {
    try {
        const {name, rol} = req.body;
        await user.setUser({name, rol});
        res.json(201);
    } catch (err) {
        console.log("Error trying to log in: ", err);
    }
})

// products routes
router.get('/products', async(req, res) => {
    try {
        res.json(await product.getProducts());
    } catch (err) {
        console.log("Error trying to get products: ", err);
    }
})

router.get('/products/:id', async(req, res) => {
    try {
        let productId = req.params.id;
        res.json(await product.getProductById(productId));
    } catch (err) {
        console.log("Error trying to get product by id: ", err);
    }
})

router.post('/products', async(req, res) => {
    try {
        rol = await user.getUserRol();
        if (rol) {
            const { title, price } = req.body;
            await product.addProduct({ title, price });
            res.json(201);
        }
    } catch (err) {
        return console.log("Not authorized");
    }
})

router.put('/products/:id', async(req, res) => {
    try {
        rol = await user.getUserRol();
        if (rol) {
            let productId = req.params.id;
            const {title, price} = req.body;
            await product.updateProductById(productId, {title, price});
            res.json(201);
        }
    } catch (err) {
        return console.log("Not authorized");
    }
})

router.delete('/products/:id', async (req, res) => {
    try {
        rol = await user.getUserRol();
        if (rol) {
            let productId = req.params.id;
            res.json(await product.deleteProductById(productId));
        }
    } catch (err) {
        return console.log("Not authorized");
    }
})

// cart routes
router.post("/", async(req, res) => {
    try {
        await cart.createCart();
        res.json(201);
    } catch (err) {
        console.log("Cart not created: ", err)
    }
})

router.delete("/:id", async(req, res) => {
    let cartId = req.params.id;
    try {
        await cart.deleteCart(cartId);
        res.json(201);
    } catch (err) {
        console.log("Cart not deleted: ", err)
    }
})

router.get("/:id/products", async(req, res) => {
    let cartId = req.params.id;
    try {
        res.json(await cart.getCartProducts(cartId));
    } catch (err) {
        console.log("Cant get products: ", err)
    }
})

router.post("/:id/products", async(req, res) => {
    try {
        const { title, price } = req.body;
        await cart.addProductToCart(req.params.id, {title, price});
        res.json(201)
    } catch (err) {
        console.log("Error adding product: ", err);
    }
})

router.delete("/:id/products/:id_prod", async(req, res) => {
    try {
        res.json(await cart.deleteProductByCartId(req.params.id, req.params.id_prod));
    } catch (err) {
        console.log("Err deleting product by cart id ", err)
    }
})

module.exports = router;