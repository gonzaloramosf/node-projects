const express = require('express');
const routes = require('./routes/routes');
const path = require('path');
const { engine } = require('express-handlebars');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: path.join(__dirname, './views/layouts/main.hbs'),
    layoutsDir: path.join(__dirname, './views/layouts'),
    partialsDir: path.join(__dirname, './views/partials')
}))
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'hbs');

app.use('/api', routes);

app.listen(8080, () => {
    console.log('Server on port 8080');
})