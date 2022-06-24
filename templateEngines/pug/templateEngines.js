const express = require('express');
const routes = require('./routes/routes');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

app.use('/api', routes);

app.listen(8080, () => {
    console.log('Server on port 8080');
})