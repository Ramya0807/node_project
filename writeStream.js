var fs = require('fs');
var read = require('./read.js');
var http = require('http');
var port = 3000;
console.log(typeof read);
var count=0
var readData = fs.createReadStream('readable.txt','utf8');
var writeData = fs.createWriteStream('writeStream.txt');

// readData.on('data',function(chunk){
//     console.log("testing"+count);
//     count++;
//     writeData.write(chunk);
//     console.log("testing end"+chunk.slice(1,100));
// });
var server = http.createServer(function(req,res){
    readData.pipe(res);
})
server.listen(port,()=>{
    console.log("testing value");
})
//readData.pipe(writeData);