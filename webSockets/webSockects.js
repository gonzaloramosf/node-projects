const express = require('express');
const routes = require('./routes/routes');
const path = require('path');
const { Server: IOServer } = require('socket.io');
const { engine } = require('express-handlebars');

const products = [

];

const messages = [

];

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './views')));

app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: path.join(__dirname, './views/layouts/main.hbs'),
    layoutsDir: path.join(__dirname, './views/layouts'),
    partialsDir: path.join(__dirname, './views/partials')
}))
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'hbs');

app.use('/api', routes);

const expressServer = app.listen(8080, () => {
    console.log('Server on port 8080');
})

const io = new IOServer(expressServer);
io.on('connection', socket => {
    socket.emit('server:products', products);

    socket.on('client:product', product => {
        products.push(product);
        io.emit('server:products', products);
    });

    socket.emit('server:messages', messages);

    socket.on('client:messages', message => {
        messages.push(message);
        io.emit('server:messages', messages);
    });
})