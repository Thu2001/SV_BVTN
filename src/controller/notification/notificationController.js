'use strict'
const util = require('util')
const mysql = require('mysql')
const db = require('../../configs/connectDB')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const getListNotification = async (req, res) => {
        const Account = req.body.Account;
        console.log(Account);
        const[rows,fields]= await db.execute('SELECT * FROM db_healthmanagerment.notification a where a.userCode = ?',[Account])
        return res.status(200).json({
            message:'ok',
            data:rows
        })
    }

module.exports = {
    getListNotification
}
