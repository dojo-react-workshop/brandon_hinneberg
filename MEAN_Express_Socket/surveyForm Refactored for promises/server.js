const express = require('express');
const app = express();
const bp = require('body-parser');
const path = require('path');
const port = 8000;

app.use(express.static(path.join(__dirname, '/client/')));
app.use(bp.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, '/client/views/'));
app.set('view engine', 'ejs');

require('./server/config/routes.js')(app);


const server = app.listen(port, () => {
    console.log('Server is on!')
});