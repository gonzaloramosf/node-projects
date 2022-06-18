const products = [
]

class Products {
    async getProducts() {
        try {
            return products;
        } catch (error) {
            console.log(error);
        }
    }

    async getProductById(id) {
        try {
            let product = products.find(product => product.id === id);
            return product;
        } catch (error) {
            console.log(error);
        }
    }

    async addProduct(product) {
        try {
            product.id = products.length + 1;
            products.push(product);
            return products;
        } catch (error) {
            console.log(error);
        }
    }

    async updateProductById(id, data) {
        try {
            let index = products.map(item => {
                return item.id;
            }).indexOf(id);
            products[index].title = data.title;
            products[index].price = data.price;
            console.log(products);
            return products;
        } catch (error) {
            console.log(error);
        }
    }

    async deleteProductById(id) {
        try {
            let index = products.map(item => {
                return item.id;
            }).indexOf(id);
            products.splice(index, 1);
            console.log(products);
            return products;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = Products;