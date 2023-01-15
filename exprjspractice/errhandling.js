var express = require('express')
var app = express()

app.use((err, req, res, next)=>{
    console.log("error: ", err);
    res.status(500).send("Something broke!")
})

app.use('/', (req, res, next)=>{
    faultyjs();
})

app.listen(3000, console.log("OK"));