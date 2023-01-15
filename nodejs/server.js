const express = require('express');
const app = express();
const port = 3000;
const util = require('util');

app.get('/', (req, res) => {
    util.log("/ request received...");
    res.send('Hello World!');
});

app.post('/', (req, res) => {
    util.log('POST /');
    res.send('POST request received...');
});

app.put('/user', (req, res) => {
    util.log('PUT /user');
    res.send("PUT request received");
});

app.delete('/user', (req, res) => {
    util.log('DELETE /user');
    res.send("DELETE request received");
});

app.get('/download', (req, res)=> {
    res.download('./object1.js');
});

app.listen(port, () => {
    console.log(`Example app listening on ${port}`);
});