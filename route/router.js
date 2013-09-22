/**
 * Created with JetBrains WebStorm.
 * User: lenovo
 * Date: 13-9-9
 * Time: 下午8:34
 * To change this template use File | Settings | File Templates.
 */
var url = require("url");
var requestHandlers = require('./requestHandlers');

var handle = {};
// handle["/favicon.ico"] = requestHandlers.start;
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/login"] = requestHandlers.login;
handle["/upload"] = requestHandlers.upload;

function router(req,res){
    var pathname = url.parse(req.url).pathname;
    console.log("Request for " + pathname + " received.");
    console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](req,res);
    } else {
        console.log("No request handler found for " + pathname);
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.write("404 Not found");
        res.end();
    }
}
exports.router = router;