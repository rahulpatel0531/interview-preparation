const os = require('os')

console.log('Platform: ', os.platform());
console.log('CPU Architecture:: ', os.arch());
console.log('Free memory: ', os.freemem());
console.log('Total memory: ', os.totalmem());
console.log('Home Directory: ', os.homedir());
console.log('CPU Core: ', os.cpus().length);



// Global Object in nodejs
global.myVar = "Global Value";

console.log(global.myVar);
console.log(process.platform);
console.log('Directoty name :', __dirname);
console.log('Filename: ', __filename);
console.log(module.exports);

const buffer = Buffer.from('Hello, World!');
console.log(buffer.toString()); // Output: Hello, World!
console.log(buffer.length); // Output: 13 (byte length)
console.log(require.cache); // Shows all cached modules
