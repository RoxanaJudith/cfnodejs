var express = require("express");

var app = express();

app.set("view engine","pug");

app.get("/",function(req, res){
    res.render("index",{hello: "hola rox"});   //send manda respuesta y cierra conexion
})
app.listen(8080);