const fs = require('fs');

const readStream = fs.createReadStream('../readContent.txt', 'utf8');

readStream.on('data', (chunk) => {
    console.log('Chunk received:', chunk);
});

readStream.on('end', ()=> {
    console.log('No more data');
})