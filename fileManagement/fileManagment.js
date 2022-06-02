const productsContainer = [{"title":"auto","id":1},{"title":"camioneta","id":2},{"title":"moto","id":3}];

const fs = require('fs');
let productsFile = fs.writeFileSync('./products.txt', JSON.stringify(productsContainer));
productsFile = JSON.parse(fs.readFileSync('./products.txt', 'utf-8'));

class Container {
    save(box) {
        box.id = productsFile.length + 1;
        productsFile.push(box);
        fs.writeFileSync('./products.txt', JSON.stringify(productsFile));
        return box.id;
    }

    getById(id) {
        let getItem = productsFile.filter(item => item.id === id);
        if(getItem.length === 1) {
            return getItem;
        } else {
            return null;
        }
    }

    getAll() {
        return productsFile;
    }

    deleteById(id) {
        for(let i=0; i < productsFile.length; i++) {
            if(productsFile[i].id === id) {
                productsFile.splice(i, 1);
            } 
        }
        return productsFile;   
    }

    deleteAll() {
        productsFile.splice(0, productsFile.length);
        return productsFile;
    }
}

let box = new Container();
console.log(box.save({title: 'barco', id: null}));
console.log(box.getById(7));
console.log(box.getAll());
console.log(box.deleteById(2));
console.log(box.deleteAll());
