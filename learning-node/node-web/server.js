const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');


    res.end('hello darkness');
});

server.listen(4200);
console.log('now listen on http://localhost:4200')