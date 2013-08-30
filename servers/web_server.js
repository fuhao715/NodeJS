/**
 * Created with JetBrains WebStorm.
 * User: fuhao
 * Date: 13-8-30
 * Time: 下午2:56
 * To change this template use File | Settings | File Templates.
 */
var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');

}).listen(8080)  ;

console.log('Server running on port 8080.');