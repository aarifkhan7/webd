var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/login', (req, res)=>{
    res.sendFile(__dirname + '/static/login.html');
});

app.post('/login', (req, res)=>{
    let user = req.body.username;
    let pass = req.body.password;
    res.send(`Username: ${user} Password: ${pass}`);
})

app.get('/', (req, res)=>{
    res.send("Welcome, client! goto /login to login...");
});

app.listen(3000, console.log("OK"));