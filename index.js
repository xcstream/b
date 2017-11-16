const model = require('./model')

const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
var app = express()
app.use(session({
    secret: 'zenns',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true }
}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'));

app.use('/api/login',(req,res)=>{
    var username = req.body.username
    var password = req.body.password
    if(req.body.username && req.body.password){
        if (username == password){
            res.send({code:200})
        }else{
            res.send({code:403})
        }
    }else{
        res.send({code:400})
    }

})
















app.listen(4000)
console.log('http://localhost:4000')