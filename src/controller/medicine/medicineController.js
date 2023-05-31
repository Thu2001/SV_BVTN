'use strict'
const util = require('util')
const mysql = require('mysql')
const db = require('../../configs/connectDB')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const getListMedicine = async (req, res) => {
        const Account = req.body.Account;
        console.log(Account);
        const[rows,fields]= await db.execute('select a.namePres, a.putDate, a.status,a.idPres from  db_healthmanagerment.prescription a  where a.userCode = ?',[Account])
        return res.status(200).json({
            message:'ok',
            data:rows
        })
    }
    const getListThuoc = async (req, res) => {
        const idPres = req.body.idPres;
        const[rows,fields]= await db.execute('select b.codeT,b.nameT,b.SXT,b.addressT,b.ngayHHT,b.dosageT,b.ngayHHT,b.ngaySXT,b.soluong from medicine_prescription_map a join medicine b on a.codeT=b.codeT where a.idPres = ?',[idPres])
        return res.status(200).json({
            message:'ok',
            data:rows
        })
    }
    const datlich = async (req, res) => {
        const faculty = req.body.faculty;
        const putDate = req.body.putDate;
        const codeUser = req.body.codeUser;
        console.log(codeUser);
        const[rows,fields]= await db.execute('INSERT  db_healthmanagerment.calendar (putDate,faculty,userCode) VALUES (?,?,?)',[putDate,faculty,codeUser])
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
    getListMedicine,datlich,getmedicune,getListThuoc
}
