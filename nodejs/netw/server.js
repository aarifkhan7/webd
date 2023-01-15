const http = require('http');
const fs = require('fs');

function send404(response){
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write("Error 404: Resource not found");
    response.end();
};

const server = http.createServer((req, res)=>{
    if(req.method == 'GET' && req.url == '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('./index.html').pipe(res);
    }else{
        send404(res);
    }
});

server.listen(3000);
console.log('Server started on http://127.0.0.1:3000/');