const socket = io();
const productForm = document.querySelector('#productForm');
const productTitle = document.querySelector('#title');
const productPrice = document.querySelector('#price');

const addProduct = (product) => {
    socket.emit('client:product', product);
}

const renderProduct = (products) => {
    const html = products.map((elem, index) => {
        return (`<div>
            <strong>Title: ${elem.title} </strong>
            <em>Price: ${elem.price} </em>
        </div>
        `)
    }).join(' ');
    document.getElementById('products').innerHTML = html;
}

productForm.addEventListener('submit', evt => {
    evt.preventDefault();
    const product = {title: productTitle.value, price: productPrice.value};
    addProduct(product);
})

socket.on('server:products', renderProduct)