var express = require('express');
var app = express();
var session = require('express-session');

app.use(session({
    name:'loginapp',
    secret:'aarifkhan',
    resave:false,
    saveUninitialized:false,
    cookie:{
        secure: false,
        maxAge: 1000 * 60 * 60
    }
}));

var sessionChecker = (req, res, next)=>{
    console.log(`Session Checker: ${req.session.id}`.green);
    console.log(req.session);
    if(req.session.profile){
        console.log(`Found user session`.green);
        next();
    }else{
        console.log(`No User session found`.red);
        res.redirect('/login');
    }
};

app.use('/', sessionChecker, async function (req, res, next) {
    res.redirect('/account');
});

app.listen(3000, console.log("OK"));
