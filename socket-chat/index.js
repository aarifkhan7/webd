const express = require('express');
const http = require('http');
const app = express();

const server = http.createServer(app);
const socketio = require('socket.io');
const chatserver = new socketio.Server(server);

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
});

chatserver.on("connection", (socket)=>{
    console.log("a user connected");
    socket.emit("hi");
    socket.on("chat message", (msg) => {
        console.log(msg);
        socket.emit("chat message", msg);
    })
    socket.on("disconnect", ()=>{console.log("User disconnected")});
});

server.listen(3000, console.log("OK"));