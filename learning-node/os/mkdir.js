const fs = require('fs');

fs.mkdir('backend-node/learning-node/node', {recursive: true}, (err) => {
    if(err) return console.error(err);
});