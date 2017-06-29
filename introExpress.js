var express = require('express');
 var app = express();
 function showHomePage(req,res){
     res.send("express validation");
    console.log("validating"); 
 }
 function showContactPage(req,res){
     res.send("contact page is shown");
 }
 function showContactHomePage(req,res){
     res.send("contact home  page is shown");
 }
 function showAboutPage(req,res){
     res.send("contact About page is shown");
 }

 app.get('/',showHomePage);
 app.get('/contact',showContactPage);
 app.get('/about',showAboutPage);
 app.get('/contact/home',showContactHomePage)
 app.listen(3000);