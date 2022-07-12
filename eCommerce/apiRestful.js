const express = require('express');
const routes = require('./routes/routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/html', express.static(__dirname + '/html'));

app.use('/api', routes);

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('Server on port 8080');
})