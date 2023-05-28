'use strict';
const mysql = require('mysql2/promise');

console.log("Creating connection pool...");

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'db_healthmanagerment',
    password: '12345'
})

module.exports = db