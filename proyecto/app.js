var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/fotos", { useNewUrlParser: true, useUnifiedTopology: true});

var userSchemaJSON = {
    email: String,
    password: String
};

var user_schema = new Schema(userSchemaJSON);

var User = mongoose.model("User", user_schema);  //establece conexion con bd

//midominio.com/estatico/
app.use("/estatico", express.static('public'));  //funcion static retorna midleware necesario que se monta en use que permite servir archivos staticos
app.use(bodyParser.json()); //para peticiones formato application/json
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine","pug");

app.get("/",function(req, res){
    res.render("index");
});

app.get("/login",function(req, res){
    User.find(function(err, doc){   //recuperar todos los usuarios
        console.log(doc);
        res.render("login");
    });
});

app.post("/users", function(req, res){
    var user = new User({email: req.body.email, password: req.body.password});

    user.save(function(){
        res.send("Datos Guardados");
    });
});

app.listen(8080);