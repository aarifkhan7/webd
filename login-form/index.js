const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const morgan = require('morgan');

var app = express();

app.use(morgan('common'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret:'aarif khan',
    cookie:{
        maxAge: 1000 * 60 * 60
    }
}));

app.get('/login', (req, res) => {
    if(req.session.username){
        res.sendFile(__dirname + '/static/logged.html');
    }else{
        res.sendFile(__dirname + '/static/login.html');
    }
});

app.get('/logout', (req, res)=>{
    if(req.session.username){
        req.session.username = null;
        res.sendFile(__dirname + '/static/logoutsuccess.html');
    }else{
        res.redirect('/login');
    }
})

app.post('/login', (req, res)=>{
    if(req.body.uname == "admin" && req.body.pass == "password"){
        req.session.username = "admin";
        res.sendFile(__dirname + '/static/success.html');
    }else{
        res.redirect('/login');
    }
});

app.listen(3000, console.log("OK"));