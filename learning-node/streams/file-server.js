const fs = require('fs');
const server = require('http').createServer();


server.on('request', (req, res) => {
    fs.readFile('./big', (error, data) => {
        if(error){
            console.error(error)
        }

        res.end(data);
    });
});


server.listen(4000);
console.log('Listen on port 4000');