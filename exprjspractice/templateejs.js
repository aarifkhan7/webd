var express = require('express');
var ejs = require('ejs');
var app = express();

app.set('views', __dirname);
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('index', {user: {name: 'aarif khan', age:'20'}});
});

app.listen(3000, console.log("OK"));