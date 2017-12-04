const model = require('./model')

const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
var app = express()
app.use(session({
    secret: 'www.appxc.com',
    resave: true,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: 1000 * 3600 * 24 * 30
    }
}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'));

app.use('/api/login',(req,res)=>{
    var username = req.body.username
    var password = req.body.password
    if(req.body.username && req.body.password){
        if (username == password){
            req.session.username = username
            res.send({code:200})
        }else{
            res.send({code:403})
        }
    }else{
        res.send({code:400})
    }
})

app.use('/api/logout',(req,res)=>{
    req.session.username = null
    res.send({code:200})
})


app.use('/api/info',(req,res)=>{
    if(req.session.username){
        res.send({code:200,username:req.session.username })
    }else{
        res.send({code:403,username:null})
    }
})

app.listen(4000)
console.log('http://localhost:4000')