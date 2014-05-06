/**
 * Created with JetBrains WebStorm.
 * User: lenovo
 * Date: 13-9-9
 * Time: 下午8:41
 * To change this template use File | Settings | File Templates.
 */
 var server = require("./servers/web_server");
 server.start() ;

/**
var http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}).listen(8888); */