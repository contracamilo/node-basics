const fs = require('fs');

fs.copyFile('text.txt', 'copy.txt', (err) => {
    if(err) return console.error(err);

    console.log('file copied!')
});
