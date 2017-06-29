var fs = require('fs');
 fs.readFile("textFile.txt",function(err,data){
     if(err){
         console.log("error");
     }else{
         console.log("testing"+data.toString());
     }
 });
//console.log("testing"+data.toString());
console.log("end of the file");