var express = require('express');
 var app = express();
 

 app.get('/employees/:id',function(req,res){
     var textId = req.params.id;
     console.log(typeof textId);
     res.send("employee details id "+ textId);
 });

app.get('/empsub/:name/projects/:project_id',function(req,res){
     var textName = req.params.name;
     var projectId =req.params.project_id
     console.log(typeof textName);
     res.send("employee details Name "+ textName +" project id "+projectId);
 });

 app.post('/emppost',function(req,res){
     var textName = req.params.name;
     console.log(typeof textName);
     res.send("employee details Name "+ textName);
 });

 app.listen(3000);