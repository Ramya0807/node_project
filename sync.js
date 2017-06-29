var fs = require('fs');
var data = fs.readFileSync("textFile.txt");
console.log("testing"+data.toString());
console.log("end of the file");