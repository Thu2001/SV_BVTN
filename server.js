const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const QRCode = require('qrcode');
var qr = require('qr-image');
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// app.get('/abc',async(req,res)=>{
//     let img='';
//     let qr= await QRCode.toDataURL('tui la tin dep trai!');
//     console.log(qr);
//     img = `<image src= " `+qr+ `" />`
//     return res.send(img);
// });

app.get('/qr', function(req,res){
    
    console.log(qr.image('tins ddep trai', { type: 'png' }).pipe(res).originalUrl);

 })

let routes = require('./src/route/api') //importing route
app.use("/api", routes)
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})

app.listen(port)

console.log('RESTful API server started on: ' + port)
    