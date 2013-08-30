/**
 * Created with JetBrains WebStorm.
 * User: fuhao
 * Date: 13-8-30
 * Time: 下午3:15
 * To change this template use File | Settings | File Templates.
 */
var Parser = function(){

};

Parser.prototype.parse = function(text){
    var results ={};
    var lines = text.split('\n');
    lines.forEach(function(line){
        var parts = line.split(' ');
        var letter = parts[1];
        var count = parseInt(parts[2]);
        if(!results[letter]){
            results[letter] = 0 ;
        }
        results[letter] += parseInt(count)
    });
    return results;
};

module.exports = Parser;
