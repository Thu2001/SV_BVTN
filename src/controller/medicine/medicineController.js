'use strict'
const util = require('util')
const mysql = require('mysql')
const db = require('../../configs/connectDB')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const getListMedicine = async (req, res) => {
        const Account = req.body.Account;
        console.log(Account);
        const[rows,fields]= await db.execute('select a.namePres, a.putDate, a.status from  db_healthmanagerment.prescription a  where a.userCode = ?',[Account])
        return res.status(200).json({
            message:'ok',
            data:rows
        })
    }

    const datlich = async (req, res) => {
        const putDate = req.body.putDate;
        const[rows,fields]= await db.execute('INSERT  db_healthmanagerment.calendar (putDate) VALUES (?)',[putDate])
        return res.status(200).json({
            message:'ok',
            data:rows
        })
    }
    const getmedicune = async (req, res) => {
        const codeT = req.body.codeT;
        console.log(codeT);
        const[rows,fields]= await db.execute('SELECT * FROM medicine where codeT=?',[codeT])
        return res.status(200).json({
            message:'ok',
            data:rows
        })
    }
module.exports = {
    getListMedicine,datlich,getmedicune
}
