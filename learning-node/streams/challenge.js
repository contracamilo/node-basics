const { Transform } = require('stream');


const camelize = (word) => {
    return word.toString()
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (ltr, idx) => (idx == 0) ? ltr.toLowerCase() : ltr.toUpperCase())
    .replace(/\s+/g, '');
}

const camelCaseStream = new Transform({
    transform(chunk, encoding, cb){
        //this: stream
        this.push(camelize(chunk))
        cb()
    }
});

process.stdin
    .pipe(camelCaseStream)
    .pipe(process.stdout)