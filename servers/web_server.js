/**
 * Created with JetBrains WebStorm.
 * User: fuhao
 * Date: 13-8-30
 * Time: 下午2:56
 * To change this template use File | Settings | File Templates.
 */
var http = require('http');
var route = require('../route/router');
var server = http.createServer();
/*
http.createServer(function(req,res){
    console.log("Request received.");
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World 符浩 \n');

}).listen(8080);

console.log('Server running on port 8080.');
*/

function start(){
    var requestFunction = function(req, res){
        console.log("Request received.");
        // req.setEncoding('utf8');//请求编码
        route.router(req,res);
    };

    server.on('request',requestFunction);
    server.listen(8080, "127.0.0.1");

    console.log('Server running at http://127.0.0.1:8080/ ');
}

exports.start = start;