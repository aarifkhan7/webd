const express = require('express')
const morgan = require('morgan')

var app = express();

app.use(morgan('tiny'));

app.get('/', (req, res)=>{
    res.send("Hello, Client!");
    res.end();
});

app.get('/favicon.ico', (req, res)=>{
    res.sendFile(__dirname + '/favicon.ico');
})

app.listen(3000, console.log("OK"));