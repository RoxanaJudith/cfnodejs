var http = require("http"),
    fs = require("fs");

http.createServer(function(req, res){
    fs.readFile("./index.html", function(err, html){
        res.writeHead(200,{"Content-Type":"application/json"}); //text/html en caso de enviar html, application/json en caso de enviar json
        res.write(JSON.stringify({nombre: "Uriel", username:"roxana"}));
        res.end();
    }); 
}).listen(8080);    
   

