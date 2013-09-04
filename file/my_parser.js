/**
 * Created with JetBrains WebStorm.
 * User: fuhao
 * Date: 13-8-30
 * Time: 下午2:35
 * To change this template use File | Settings | File Templates.
 */
var Parser = require('./parser');
var fs = require('fs');
fs.readFile('../config/example_log.txt',function(err,logData){
    if (err) throw err;
    var text = logData.toString();
    console.log(text);
    console.log("成功读取文件。");
    var parser = new Parser();
    console.log(parser.parse(text));
});
