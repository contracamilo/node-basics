const EventEmitter = require('events');


class Logger extends EventEmitter {
    execute(cb){
        console.log('before');
        this.emit('start');
        cb();
        this.emit('finish');
        console.log('After')
    }
}


const logger = new Logger();

logger.on('start', (params) => console.log('Starting'));
logger.on('finish', (params) => console.log('Finishing'));
logger.on('finish', (params) => console.log('Done'));


//logger.execute(() => console.log('Hello World'))

logger.execute(() => setTimeout(() => {
    console.log('Hello World')
}, 500))