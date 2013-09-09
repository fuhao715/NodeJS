/**
 * Created with JetBrains WebStorm.
 * User: lenovo
 * Date: 13-9-9
 * Time: 下午9:49
 * To change this template use File | Settings | File Templates.
 */
function start() {
    console.log("Request handler 'start' was called.");
}

function upload() {
    console.log("Request handler 'upload' was called.");
}

exports.start = start;
exports.upload = upload;