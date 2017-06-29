var express = require('express');
 var app = express();
  app.get('/home',function(req,res){
      console.log("testing dirname"+__dirname);
       console.log("testing fileName"+__filename);
     res.sendFile(__dirname +'/templates/home.html');
 });

  app.get('/contact',function(req,res){
      console.log("testing dirname"+__dirname);
       console.log("testing fileName"+__filename);
     res.sendFile(__dirname +'/templates/contact.html');
 });

 
 app.listen(3000);