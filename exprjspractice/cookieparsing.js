var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/', (req, res)=>{
    console.log("Cookies: ", req.cookies);
    console.log("Signed Cookies: ", req.signedCookies);
});

app.listen(3000, console.log("OK"));
