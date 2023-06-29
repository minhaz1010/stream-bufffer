const fs = require('fs');

const startTime = new Date();

const ReadableStream = fs.createReadStream(`${__dirname}/hehe.mkv`);
const WritableStream = fs.createWriteStream(`${__dirname}/abcd.mkv`);

ReadableStream.pipe(WritableStream);

WritableStream.on('close', () => {
  const endTime = new Date();
  const duration = endTime - startTime;
  console.log('Copying is finished');
  console.log('Time taken: ' + duration + 'ms');
});
