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

    async addProduct(product) {
        try {
            product.id = products.length + 1;
            products.push(product);
            return products;
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = Products;