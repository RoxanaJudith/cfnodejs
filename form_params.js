const http = require("http"),
    fs = require("fs"),
    parser = require("./param_parser.js"),
    render = require("./render_view.js");

   var p = parser.parse; 

http.createServer(function(req, res){
    // console.log(req);
    if(req.url.indexOf("favicon.ico") > 0 ){ return; }

    fs.readFile("./index.html", function(err, html){
       
        res.writeHead(200,{"Content-Type":"text/html"}); //text/html en caso de enviar html, application/json en caso de enviar json
        res.write(render.render(html.toString(),parser.parse(req)));
        res.end();
    }); 
}).listen(8080);    
   