var express = require("express");

var app = express();

app.get("/",function(req, res){
    res.send("Hola mundo");   //send manda respuesta y cierra conexion
})
app.listen(8080);