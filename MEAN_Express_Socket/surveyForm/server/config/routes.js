module.exports = function routes(app) {
    app.get('/', function(request, response) {

        const contextObj = {
            title: 'server form'
        }
        response.render('index', contextObj); //render invokes the view engine
    })
    app.post('/user', function(request, response) {

        response.json(request.body);

    })

    app.get('/results', function(request, response) {
        response.render('results', request.body);
    })

}