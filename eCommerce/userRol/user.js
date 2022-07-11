let userRol = false;

class Products {
    async setUser(user) {
        try {
            if (user.rol === "admin") {
                userRol = true;
                console.log(userRol);
                return userRol;
            }
            userRol = false;
            return userRol;
        } catch (error) {
            console.log(error);
        }
    }

    async getUserRol() {
        return userRol;
    }
}

module.exports = Products;