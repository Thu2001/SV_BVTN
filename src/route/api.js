'use strict';
const express = require('express')
const jwt = require('jsonwebtoken')
let productsCtrl = require('../controller/user/userControllers');
let medicinCtrl = require('../controller/medicine/medicineController');
let notificationCtrls = require('../controller/notification/notificationController');
const route = express.Router();
const verifyToken = require('../../jwt/auth')


route.post('/user',productsCtrl.get)
route.post('/register',productsCtrl.register)
route.delete('/logout',verifyToken,productsCtrl.logout)
route.post('/update',productsCtrl.updateUser);

route.post('/listPre',medicinCtrl.getListMedicine);

route.post('/listNoti',notificationCtrls.getListNotification);
route.post("/datlich",medicinCtrl.datlich);
route.post("/getmedicune",medicinCtrl.getmedicune);
route.post("/getListThuoc",medicinCtrl.getListThuoc);
module.exports = route