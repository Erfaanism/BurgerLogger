const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'burgers_db'
});

module.exports = connection;