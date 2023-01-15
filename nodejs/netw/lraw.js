var http = require('http');
var server = http.createServer((req, res) => {
    console.log("requesting headers");
    console.log(req.headers);
    // Setting the headers
    res.setHeader("Content-Type", "text/html");
    // Sending the body
    res.write("Hello, Client!");
    res.end();
});

server.listen(3000);
console.log("Server running on http://127.0.0.1:3000/");
