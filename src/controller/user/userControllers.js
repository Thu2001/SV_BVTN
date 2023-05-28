'use strict'
const util = require('util')
const mysql = require('mysql')
const db = require('../../configs/connectDB')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const get = async (req, res) => {
        const Account = req.body.Account;
        console.log(Account);
        const[rows,fields]= await db.execute('SELECT * FROM user where Account=?',[Account])
        return res.status(200).json({
            message:'ok',
            data:rows
        })
    }
const logout = async(req,res) =>{
        const Account = req.Account
        const refreshToken = null
        db.execute('update user set refreshToken=? where Account = ?',[refreshToken,Account]);
        return res.status(200).json({
            message: 'logout ok' 
        })
}
const register = async (req, res) => {
       
    const Account = req.body.Account;
    const Password = req.body.Password;
    console.log(req.Account);
    console.log(Password);
    const[rows,fields]= await db.execute("INSERT INTO user (Account, Password) VALUES (?,?)",[Account,Password]);
    return res.status(200).json({
        message:'ok',
        data:rows
    })
}
module.exports = {
    get,logout,register
}
