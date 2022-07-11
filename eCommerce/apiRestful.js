const express = require('express');
const routes = require('./routes/routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/html', express.static(__dirname + '/html'));

app.use('/api', routes);

app.listen(8080, () => {
    console.log('Server on port 8080');
})