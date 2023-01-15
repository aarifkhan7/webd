const express = require('express')
const http = require('http');
const app = express();

app.use((req, res, next)=>{
    res.end("hello express!");
});

http.createServer(app).listen(3000);