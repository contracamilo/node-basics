const os = require('os');

//console.log('CPU info', os.cpus());
//console.log('IP address', os.networkInterfaces()['Ethernet 2'].map(i => i.address));
console.log('Free Memory', os.freemem());
console.log('OS type', os.type());
console.log('SO version', os.release());
console.log('user info', os.userInfo());