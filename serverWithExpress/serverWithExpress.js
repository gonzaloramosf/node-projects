const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const fs = require('fs');
const productsContainer = [{"title":"auto","id":1},{"title":"camioneta","id":2},{"title":"moto","id":3}];

class Container {
    async getAll() {
        try {
            let productsFile = await fs.promises.writeFile('./products.txt', JSON.stringify(productsContainer));
            productsFile = await fs.promises.readFile('./products.txt', 'utf-8');
            productsFile = JSON.parse(productsFile);
            console.log("getAll: ", productsFile);
            return productsFile;   
        } catch (error) {
            console.log(`Error getAll method: ${error}`);
        }
    }


    async getRandomProduct() {
        try {
            let productsFile = await fs.promises.writeFile('./products.txt', JSON.stringify(productsContainer));
            productsFile = await fs.promises.readFile('./products.txt', 'utf-8');
            productsFile = JSON.parse(productsFile);
            let productRandom = productsFile[Math.floor(Math.random()*productsFile.length)];
            console.log(productRandom);
            return productRandom;
        } catch (error) {
            console.log(`Error getRandomProduct method: ${error}`);
        }
    }
}

let box = new Container();

app.get('/products', async (req, res) => {
    let getAll = await box.getAll();
    res.json(getAll);
})
app.get('/randomProduct', async (req, res) => {
    let randomProduct = await box.getRandomProduct();
    res.json(randomProduct);
})

app.listen(port, (error) => {
    if(!error) {
        console.log(`Server on port: ${port}`);
    } else {
        console.log(`Error: ${error}`)
    }
})