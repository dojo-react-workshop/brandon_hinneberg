var express = require('express');
var app = express();
var bp = require('body-parser');
var path = require('path');
var port = 8000;

app.use(express.static(path.join(__dirname + '/client/')));
app.use(bp.urlencoded({ extended: true }));
app.set('views', path.join(__dirname + '/client/views/'));
app.set('view engine', 'ejs');
require('./server/config/routes.js')(app);

var server = app.listen(port, function() {
    console.log('Server is on!');
})