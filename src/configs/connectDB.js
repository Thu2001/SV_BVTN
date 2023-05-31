'use strict';
const mysql = require('mysql2/promise');

console.log("Creating connection pool...");

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'db_healthmanagerment',
    password: 'Aa123'
})

module.exports = db