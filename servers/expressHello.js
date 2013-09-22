/**
 * Created with JetBrains WebStorm.
 * User: fuhao
 * Date: 13-9-22
 * Time: 上午8:24
 * To change this template use File | Settings | File Templates.
 */
var express = require("express");
var app = express();
app.get("/",function(req,res){
    res.send("hello world NodeJS express框架 ");
});

app.listen(8080);