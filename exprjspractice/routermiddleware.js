var express = require('express');
var app = express();
var router = express.Router();

router.use((req, res, next)=>{
    console.log("Router is used");
    next();
});

router.use('/', (req, res, next)=>{
    res.write('Welcome to admin page');
    next();
});

router.use('/user/:id', (req, res, next)=>{
    res.write("Hello, user id " + req.params.id);
    res.end();
});

app.use('/admin', router);

app.use('/', (req, res, next)=>{
    res.send("welcome home!");
    res.end();
})

app.listen(3000, ()=>{
    console.log("OK");
});
