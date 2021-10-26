const os = require('os');

console.log("Free RAM: "+(os.freemem()/(1024*1024*1024)).toFixed(2)+" GB");

console.log("Total RAM: "+(os.totalmem()/(1024*1024*1024)).toFixed(2)+" GB");

// console.log(os.arch());

// console.log(os.cpus());

// console.log(os.endianness());

// console.log(os.getPriority());

// console.log(os.homedir());

// console.log(os.tmpdir());

// console.log(os.hostname());

// console.log(os.loadavg());

// console.log(os.networkInterfaces());

// console.log(os.platform());

// console.log(os.release());

// console.log(os.type());

// console.log(os.userInfo());

// console.log(os.uptime());

// console.log(os.version());