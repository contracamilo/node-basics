const { Writable } = require('stream');

const writableStream = new Writable({
    write(chunk, encoding, cb) {
        console.log('return:', chunk.toString());
        cb();
    }
});

process.stdin.pipe(writableStream);