/**
 * Created with JetBrains WebStorm.
 * User: fuhao
 * Date: 13-9-11
 * Time: 下午4:54
 * To change this template use File | Settings | File Templates.
 */
function dynamicArgumentsBundle(funcName,arguments){
    var array = new Array();

    for(var i=1;i<arguments.length;i++){
        array.push(arguments[i]);
    }
    arguments[0].apply(this,array);
}

function test(a,b){
    alert(a);
    alert(b);
}

function test1(a,b,c){
    alert(a);
    alert(b);
    alert(c);
}
dynamicArgumentsBundle(test,"a","b");
dynamicArgumentsBundle(test1,"a","b","c");
