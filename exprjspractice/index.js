const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send("GET request received on /");
});

app.post('/', (req, res)=>{
    res.send("POST request received on /");
});

app.put('/', (req, res)=>{
    res.send("PUT request received on /");
});

app.all('/anyreq', (req, res)=>{
    res.send("ALL HTTP Protocols have the same response for this URL");
});

app.listen(3000, () => {
    console.log("Server started on Port 3000");
});