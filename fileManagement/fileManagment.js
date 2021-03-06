const fs = require('fs');
const productsContainer = [{"title":"auto","id":1},{"title":"camioneta","id":2},{"title":"moto","id":3}];

class Container {
    async save(box) {
        try {
            let productsFile = await fs.promises.writeFile('./products.txt', JSON.stringify(productsContainer));
            productsFile = await fs.promises.readFile('./products.txt', 'utf-8');
            productsFile = JSON.parse(productsFile);
            box.id = productsFile.length + 1;
            productsFile.push(box);
            console.log("save: ", productsFile);
            fs.promises.writeFile('./products.txt', JSON.stringify(productsFile));
            return productsFile;
        } catch (error) {
            console.log(`Error save method: ${error}`);
        }
    }

    async getById(id) {
        try {
            let productsFile = await fs.promises.writeFile('./products.txt', JSON.stringify(productsContainer));
            productsFile = await fs.promises.readFile('./products.txt', 'utf-8');
            productsFile = JSON.parse(productsFile);
            let getItem = productsFile.filter(item => item.id === id);
            if(getItem.length === 1) {
                console.log("getById: ", getItem);
                return getItem;
            } else {
                console.log("getById: ", null);
                return null;
            }   
        } catch (error) {
            console.log(`Error getById method: ${error}`);
        }
    }

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

    async deleteById(id) {
        try {
            let productsFile = await fs.promises.writeFile('./products.txt', JSON.stringify(productsContainer));
            productsFile = await fs.promises.readFile('./products.txt', 'utf-8');
            productsFile = JSON.parse(productsFile);
            productsFile = productsFile.filter(prod => prod.id !== id);
            console.log("deleteById: ", productsFile);
            await fs.promises.writeFile('./products.txt', JSON.stringify(productsFile));
            return productsFile;      
        } catch (error) {
            console.log(`Error deleteById method: ${error}`);
        }
    }

    async deleteAll() {
        try {
            let productsFile = await fs.promises.writeFile('./products.txt', JSON.stringify(productsContainer));
            productsFile = await fs.promises.readFile('./products.txt', 'utf-8');
            productsFile = JSON.parse(productsFile);
            productsFile.splice(0, productsFile.length);
            console.log("deleteAll: ", productsFile);
            return productsFile;
        } catch (error) {
            console.log(`Error deleteAll method: ${error}`);
        }
    }
}

let box = new Container();
box.save({title: 'barco', id: null});
box.getById(2);
box.getAll();
box.deleteById(2);
box.deleteAll();