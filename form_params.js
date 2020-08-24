var http = require("http"),
    fs = require("fs"),
    parser = require("./param_parser.js");

   var p = parser.parse; 

http.createServer(function(req, res){
    // console.log(req);
    if(req.url.indexOf("favicon.ico") > 0 ){ return; }

    fs.readFile("./index.html", function(err, html){
        var html_string = html.toString();
        var variables = html_string.match(/[^\{\}]+(?=\})/g); //almacena un array con todas las incidencias de expresion regular en index

        var nombre = "";
        
        var parametros = p(req);
        for(var i = variables.length - 1; i >= 0; i--){
            var variable = variables[i];  //ultimonombre
            html_string = html_string.replace("{"+variables[i]+"}",parametros[variable]);
        }
        res.writeHead(200,{"Content-Type":"text/html"}); //text/html en caso de enviar html, application/json en caso de enviar json
        res.write(html_string);
        res.end();
    }); 
}).listen(8080);    
   