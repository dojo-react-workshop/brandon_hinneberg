var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
    console.log('I got hit!');
    let filname;
    if (request.url === '/') {
        filename = './index.html'
    } else if (request.url === '/ninja') {
        filename = './ninja.html';
    } else if (request.url === '/dojos/new') {
        filename = './dojos.html';
    }
    fs.readFile(filename, 'utf8', function(err, fileContents) {
        if (err) {
            response.writeHead(404);
            response.write('Contents you are looking are Not Found');
        } else {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(fileContents)
        }
        response.end();
    })
});

server.listen(6789);