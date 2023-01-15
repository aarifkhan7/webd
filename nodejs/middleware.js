var express = require('express');
var app = express();

app.all('/', (req, res)=>{
    console.log("Request received /");
    res.write("Hello, Client!");
    res.end();
});

app.use('/user/:userId', (req, res)=>{
    console.log("Request /user/", req.params.userId);
    res.write("User Data access");
    res.end();
})

app.listen(3000, ()=>{
    console.log("Server started at http://127.0.0.1:3000/");
});