var express = require('express');
var session = require('express-session');
var cookieparser = require('cookie-parser');

var app = express();

app.use(cookieparser());

app.use(session({
    secret: 'Your_secret_key',
    resave: true,
    saveUninitialized: true
}));

app.get('/', (req, res)=>{
    console.log(req.cookies);
    res.send("use /login to start and /logout to stop the session");
});

app.get('/login', (req, res)=>{
    req.session.name = "Aarif Khan";
    res.send("You have logged in successfully!");
});

app.get('/logout', (req, res)=>{
    var name = req.session.name;
    res.send("Bye Bye " + name);
})

app.listen(3000, ()=>{
    console.log("Server started at http://127.0.0.1:3000/");
});