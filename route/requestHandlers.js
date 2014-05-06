/**
 * Created with JetBrains WebStorm.
 * User: lenovo
 * Date: 13-9-9
 * Time: 下午9:49
 * To change this template use File | Settings | File Templates.
 */
var querystring = require('querystring');
var fs = require('fs');
var formidable = require("formidable");
function start(req,res) {
    console.log("Request handler 'start' was called.");
    res.writeHead(200, {'Content-Type': 'text/html'});
    var html = fs.readFileSync('./app/login.html');
    res.end(html);
}

function login(req, res) {
    console.log("Request login.");
    var info ='';
    req.addListener('data', function(postDataChunk){
        info += postDataChunk;
        console.log("Received POST data chunk 数据 '"+postDataChunk + "'.");
    })
        .addListener('end', function(){
            info = querystring.parse(info);
            res.setHeader('content-type','text/html; charset=UTF-8');//响应编码，如果是html,写在head中也可以
            console.log("接收数据为：" + info.name);
            if(info.name == '张' && info.pwd =='1'){
                res.end('login success 成功 ' + info.name);
            }else{
                res.end('login failed 失败 ' + info.name);
            }
        })
}

function uploadInit(req,res){
    console.log("Request handler 'uploadInit' was called.");
    res.writeHead(200, {'Content-Type': 'text/html'});
    var html = fs.readFileSync('./app/uploadInit.html');
    res.end(html);
}

function upload(req,res) {
    console.log("Request handler 'upload' was called.");
    var form = new formidable.IncomingForm();
    form.parse(req, function(error, fields, files) {
        // fs.renameSync(files.upload.path, "./app/test.jpg");

        var readStream = fs.createReadStream(files.upload.path);
        var writeStream = fs.createWriteStream("./app/test.jpg");
        readStream.pipe(writeStream) ;

        /*util.pump(readStream, writeStream, function() {
            fs.unlinkSync(files.upload.path);
        });*/


        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("received image:<br/>");
        res.write("<img src='/show' />");
        res.end();
    });

}

function show(req,res) {
    console.log("Request handler 'show' was called.");
    fs.readFile("./app/test.jpg", "binary", function(error, file) {
        if(error) {
            res.writeHead(500, {"Content-Type": "text/plain"});
            res.write(error + "\n");
            res.end();
        } else {
            res.writeHead(200, {"Content-Type": "image/png"});
            res.write(file, "binary");
            res.end();
        }
    });
}


exports.start = start;
exports.login = login;
exports.uploadInit = uploadInit;
exports.upload = upload;
exports.show = show;