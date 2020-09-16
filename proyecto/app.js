var express = require("express");
var bodyParser = require("body-parser");
var User = require("./models/user").User;
var app = express();



app.use("/public", express.static('public'));  //funcion static retorna midleware necesario que se monta en use que permite servir archivos staticos
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