/**
 * Created with JetBrains WebStorm.
 * User: fuhao
 * Date: 13-8-30
 * Time: 下午2:56
 * To change this template use File | Settings | File Templates.
 */
var http = require('http');
var querystring = require('querystring');
var fs = require('fs');
var server = http.createServer();
/*
http.createServer(function(req,res){
    console.log("Request received.");
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World 符浩 \n');

}).listen(8080);

console.log('Server running on port 8080.');
*/
var firstPage = function(res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var html = fs.readFileSync('../app/login.html');
    res.end(html);
};

var login = function(req, res) {
    var info ='';
    req.addListener('data', function(chunk){
        info += chunk;
    })
        .addListener('end', function(){
            info = querystring.parse(info);
            res.setHeader('content-type','text/html; charset=UTF-8');//响应编码，如果是html,写在head中也可以

            if(info.name == '张' && info.pwd =='1'){
                res.end('login success 成功 ' + info.name);
            }else{
                res.end('login failed 失败 ' + info.name);
            }
        })
};

var requestFunction = function(req, res){
    req.setEncoding('utf8');//请求编码
    if(req.url == '/'){
        return firstPage(res);
    }
    if(req.url == '/login'){
        if (req.method != 'POST'){
            return;
        }
        return login(req, res) ;
    }
};

server.on('request',requestFunction);
server.listen(8080, "127.0.0.1");

console.log('Server running at http://127.0.0.1:8080/');