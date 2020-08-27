// file de connecao com o bd MySql
const mysql = require('mysql');
  
var conn = function(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '4321',
        database: 'noticiasNode'
    });
}

module.exports = function(){
       return conn;
}