var fs = require('fs');
var count=0
var testingData = fs.createReadStream('readable.txt','utf8');
testingData.on('data',function(chunk){
    console.log("testing"+count);
count++;
console.log("testing end"+chunk.slice(1,100));
});