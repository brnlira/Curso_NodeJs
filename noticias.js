var http = require('http');

var server = http.createServer( function(req, res){

    var categoria = req.url;

    if(categoria == '/tecnologia'){
        res.end("<html><body>Portal de notícias de Tecnologia</body></http>");
    } else if (categoria == '/moda') {
        res.end("<html><body>Portal de notícias de Moda</body></http>");
    } else if (categoria == '/beleza') {
        res.end("<html><body>Portal de notícias de Beleza</body></http>");
    } else {
        res.end("<html><body>Portal de notícias</body></http>");
    }
});

server.listen(3000);