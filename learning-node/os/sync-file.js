const fs = require('fs');


const file = process.argv[2];

if(!file){
    throw new Error('the name of the file must be written')
}

const content = fs.readFile(file, (error, content) => {
    if(error){
        return console.error('error', error)
    }
    const lines = content.toString().split('\n').length;
    console.log(lines);
});

