var express = require('express');
var app = express();
var router = express.Router();

function logOriginalUrl(req, res, next){
    console.log(req.originalUrl);
    next();
}

function logMethod(req, res, next){
    console.log(req.method);
    next();
}

const logStuff = [logOriginalUrl, logMethod];

app.use((req, res, next)=>{
    console.log("Time: ", Date.now());
    next()
})

app.get('/', logStuff, (req, res, next)=>{
    res.send("welcome to the root");
});

app.get('/user', (req, res, next)=>{
    console.log("-----GET Request received at /");
    res.send("hello, client!");
    res.end();
})

app.listen(3000, ()=>{
    console.log("Server started on http://127.0.0.1:3000/");
});