const { Transform } = require('stream');

const transformStream = new Transform({
    transform(chunk, encoding, cb){
        //this: stream

        this.push(chunk.toString().toUpperCase());
        cb();
    }
});

process.stdin
    .pipe(transformStream)
    .pipe(process.stdout)