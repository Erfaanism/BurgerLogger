const mysql = require('mysql');

const config = process.env.JAWSDB_URL || {
    host: '127.0.0.1',
    user: 'root',
    database: 'burgers_db'
};

const connection = mysql.createConnection(config);

connection.connect();

module.exports = connection;