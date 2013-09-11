/**
 * Created with JetBrains WebStorm.
 * User: lenovo
 * Date: 13-9-9
 * Time: 下午8:34
 * To change this template use File | Settings | File Templates.
 */
var querystring = require('querystring');
var fs = require('fs');
var url = require("url");
var requestHandlers = require('./requestHandlers');
var firstPage = function(res){
    console.log("Request firstPage.");
    res.writeHead(200, {'Content-Type': 'text/html'});
    var html = fs.readFileSync('./app/login.html');
    res.end(html);
};

var login = function(req, res) {
    console.log("Request login.");
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

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

function router(req,res){
    var pathname = url.parse(req.url).pathname;
    console.log("Request for " + pathname + " received.");
    console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname]();
    } else {
        console.log("No request handler found for " + pathname);
    }

    if(req.url == '/'){
        return firstPage(res);
    }
    if(req.url == '/login'){
        if (req.method != 'POST'){
            return;
        }
        return login(req, res) ;
    }

}
exports.router = router;