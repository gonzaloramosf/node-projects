// classes

let user = {
    name: 'Gonzalo',
    lastName: 'Ramos Farinho',
    books: [
        {
            title: 'A Dance with Dragons',
            author: 'George R. R. Martin'
        },
        {
            title: 'A Feast for Crows',
            author: 'George R. R. Martin'
        },
        {
            title: 'A Game of Thrones',
            author: 'George R. R. Martin'
        },
    ],
    pets: ['Tucson', 'Rocco', 'Teo']
}

class User {
    constructor() {
        this.name     = user.name;
        this.lastName = user.lastName;
        this.books    = user.books;
        this.pets     = user.pets;
    }

    getFullName() {
        return `${this.name} ${this.lastName}`;
    }

    addPet(pet) {
        this.pets.push(pet);
        return this.pets;
    }

    countPets() {
        return this.pets.length;
    }

    addBook(title, author) {
        return this.books.push({title, author});
    }

    getBookNames() {
        let booksNames = [];
        this.books.forEach(element => {
            booksNames.push(element.title);
        });
        return booksNames;
    }
}

user = new User();

console.log(user.getFullName());
user.addPet('Ana');
console.log(user.countPets());
user.addBook('New book', 'New author');
console.log(user.getBookNames());