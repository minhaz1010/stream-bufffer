const fs = require('fs')

const ReadableStream =  fs.createReadStream(`${__dirname}/file.txt`);

const WritableStream = fs.createWriteStream(`${__dirname}/new.txt`);

ReadableStream.pipe(WritableStream);

WritableStream.on('finish',()=>{
  console.log('Copying is fiinished');
});
