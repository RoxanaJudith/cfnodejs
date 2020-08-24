var http = require("http"),
    fs = require("fs");

http.createServer(function(req, res){
    fs.readFile("./index.html", function(err, html){
        var html_string = html.toString();
        var variables = html_string.match(/[^\{\}]+(?=\})/g); //almacena un array con todas las incidencias de expresion regular
        var nombre = "roxana";
        //variable['nombre']
        for(var i = variables.length - 1; i >= 0; i--){
            var value = eval(variables[i]);
            html_string = html_string.replace("{"+variables[i]+"}",value);
        }
        res.writeHead(200,{"Content-Type":"text/html"}); //text/html en caso de enviar html, application/json en caso de enviar json
        res.write(html_string);
        res.end();
    }); 
}).listen(8080);    
   