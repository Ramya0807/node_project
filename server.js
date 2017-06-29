var http = require('http');
var port = 3000;
'user strict'
var server = http.createServer(function(req,res){
    
    res.writeHead(200,{'content-type':'text/plain'});
   var employees ={
        id:15,
        firstName:'Ramya',
        LastName:'S',
        Country:'India'
    }
    res.end("testing the response"+ JSON.stringify(employees));
});

server.listen(port,()=>{
    console.log("server started");
})