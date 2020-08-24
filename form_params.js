var http = require("http"),
    fs = require("fs");

http.createServer(function(req, res){
    // console.log(req);
    if(req.url.indexOf("favicon.ico") > 0 ){ return; }
    // console.log("============\n\n");
    // console.log(req);
    // console.log("============\n\n");
    fs.readFile("./index.html", function(err, html){
        var html_string = html.toString();
        var arreglo_parametros = [], parametros = {};
        var variables = html_string.match(/[^\{\}]+(?=\})/g); //almacena un array con todas las incidencias de expresion regular en index

        var nombre = "";
        if(req.url.indexOf("?") > 0){
            // /?nombre=elnombre
            var url_data = req.url.split("?");  // /?nombre=rox => ['/','nombre=rox'];
            var arreglo_parametros = url_data[1].split("&");  //[nombre=algo,data=algomas]
            
        }

        for (let i = arreglo_parametros.length - 1; i >= 0; i--) {
            var parametro = arreglo_parametros[i];  //nombre = elnombre
            var param_data = parametro.split("=");  //[nombre,elnombre]
            parametros[param_data[0]] = param_data[1];  //{nombre : elnombre}
        }

        for(var i = variables.length - 1; i >= 0; i--){
            var variable = variables[i];  //ultimonombre
            html_string = html_string.replace("{"+variables[i]+"}",parametros[variable]);
        }
        res.writeHead(200,{"Content-Type":"text/html"}); //text/html en caso de enviar html, application/json en caso de enviar json
        res.write(html_string);
        res.end();
    }); 
}).listen(8080);    
   