const ws = require('ws');
const wss = new ws.WebSocketServer({port: 8080});

let listOfSockets = [];

wss.on('connection', function connection(ws){
    listOfSockets.push(ws);
    listOfSockets.forEach(element => {
        console.log(element);
    });
    console.log('someone connected...');
    ws.on('message', function (data){
        console.log('client: ' + data);
    });
});