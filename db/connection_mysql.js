/**
 * Created by lenovo on 2014/6/25.
 */
var mysql = require('mysql');
var connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password : 'root',
    database : 'python'
});

connection.connect();

connection.query('SELECT * FROM PERSON ',function(err,rows,fields){
    if(err) throw err;
    console.log('The solution is ', rows[1].FirstName)
});
connection.end();
