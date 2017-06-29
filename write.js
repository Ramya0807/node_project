var fs = require('fs');
// fs.appendFile('write.txt','dfkdmfklddfdfsdfdmapppend',function(err,res){
//     if(err){
//         console.log("error thrown");
//     }else{
//         console.log("file was sucessfully written");
//     }
// })

// ///unlink for deleting
//fs.unlink('write.txt',function(err){
//    console.log("deleted sucessfully"+ err);
//    process.exit(-1);
//})

fs.writeFileSync('create.txt' ,function(err,data){
    if(err){
        console.log("file not created");
    }
    console.log("file has been created");
    process.exit(-1);
})