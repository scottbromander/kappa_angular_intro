var express = require("express");
var app = express();
var path = require("path");
var cookies = require("./public/assets/data/cookies.json");
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded: true}));

app.set("port", (process.env.PORT || 8000));

app.post("/employee", function(req,res){
    console.log(req.body);
    res.send("Hello");
});

app.get("/cookies", function(req,res){
    res.send(cookies);
});

app.get("/*", function(req,res){
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "/public/", file));
});

app.listen(app.get("port"), function(){
    console.log("Listening on port: ", app.get("port"));
});

module.exports = app;
