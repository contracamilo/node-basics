const fs = require('fs');
const server = require('http').createServer();


server.on('request', (req, res) => {
    const src = fs.createReadStream('./big');
    src.pipe(res);
});


server.listen(4000);
console.log('Listen on port 4000');