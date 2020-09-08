var express = require("express");
var bodyParser = require("body-parser");
var app = express();

//midominio.com/estatico/
app.use("/estatico", express.static('public'));  //funcion static retorna midleware necesario que se monta en use que permite servir archivos staticos
app.use(bodyParser.json()); //para peticiones formato application/json
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine","pug");

app.get("/",function(req, res){
    res.render("index");
});

app.get("/login",function(req, res){
    res.render("login");
});

app.post("/users", function(req, res){
    console.log("Contraseña: " + req.body.password);
    console.log("Email: " + req.body.email);
    res.send("Datos recibidos");
});

app.listen(8080);