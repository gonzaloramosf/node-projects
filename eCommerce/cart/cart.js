const carts = [
]

class Products {
    async createCart() {
        try {
            carts.push([])
            return carts.length;
        } catch (err) {
            console.log(err);
        }
    }

    async deleteCart(id) {
        try {
            carts.splice(id, 1);
            console.log(carts);
            return carts
        } catch (err) {
            console.log("Error deleting cart: ", err)
        }
    }

    async getCartProducts(id) {
        try {
            if (carts[id] !== undefined) {
                console.log(carts[id])
                return carts[id];
            }
        } catch (err) {
            return console.log("Id not found: ", err);
        }
    }

    async addProductToCart(id, product) {
        try {
            carts[id].push(product);
            return console.log(carts[id]);
        } catch (err) {
            return console.log("Error pushing new product to cart selected: ", err)
        }
    }

    async deleteProductByCartId(id, id_prod) {
        try {
            if (carts[id][id_prod]) {
                carts[id].splice(id_prod, 1);
                return console.log(carts);
            }
        } catch (err) {
            console.log("Error product not deleted: ", err)
        }
    }
}

module.exports = Products;