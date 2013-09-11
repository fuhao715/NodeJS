/**
 * Created with JetBrains WebStorm.
 * User: lenovo
 * Date: 13-9-9
 * Time: 下午9:49
 * To change this template use File | Settings | File Templates.
 */
var querystring = require('querystring');
var fs = require('fs');
function start(req,res) {
    console.log("Request handler 'start' was called.");
    res.writeHead(200, {'Content-Type': 'text/html'});
    var html = fs.readFileSync('./app/login.html');
    res.end(html);
}

function login(req, res) {
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
}

function upload(req,res) {
    console.log("Request handler 'upload' was called.");
}

exports.start = start;
exports.login = login;
exports.upload = upload;