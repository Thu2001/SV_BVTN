'use strict'
const util = require('util')
const mysql = require('mysql')
const db = require('../../configs/connectDB')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const getListNotification = async (req, res) => {
        const Account = req.body.Account;
        console.log(Account);
        const[rows,fields]= await db.execute('SELECT * FROM db_healthmanagerment.calendar a where a.userCode = ?',[Account])
        return res.status(200).json({
            message:'ok',
            data:rows
        })
    }
    const getListNotification1 = async (req, res) => {
        const Account = req.body.Account;
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();

        const newdate = day+"-"+month+"-"+year;
        console.log(newdate);
        console.log(Account);
        const[rows,fields]= await db.execute('SELECT * FROM db_healthmanagerment.calendar a where a.userCode = ? and putDate = ?',[Account,newdate])
        return res.status(200).json({
            message:'ok',
            data:rows
        })
    }

module.exports = {
    getListNotification,getListNotification1
}
