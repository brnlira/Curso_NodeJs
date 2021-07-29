var express = require('express');
var app = express();

app.get('/' , function(req , res){
   res.send("<html><body>Portal de notícias</body></http>");
});

app.get('/tecnologia' , function(req , res){
    res.send("<html><body>Notícias de Tecnologia</body></http>");
 });

app.listen(3000, function(){
    console.log("Servidor rodando com Express");
});