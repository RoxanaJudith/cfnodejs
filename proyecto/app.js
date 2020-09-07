var express = require("express");

var app = express();

//midominio.com/estatico/
app.use("/estatico", express.static('public'));  //funcion static retorna midleware necesario que se monta en use que permite servir archivos staticos
app.use(express.static('assets'));

app.set("view engine","pug");

app.get("/",function(req, res){
    res.render("index");
})

app.get("/login",function(req, res){
    res.render("login");
})

app.listen(8080);