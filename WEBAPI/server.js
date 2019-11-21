var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api',function(req,res){
    console.log('Hi...');
    res.write('Hello Radhe Krishna...!');
    res.end();
});

app.get('/api/student/:id',function(req,res){
    var id = req.params.id;
    res.send(
        {id : id,name : 'keyur'}
    );
});

app.get('/api/students',function(req,res){
    res.send(
        [
            {id : 27,name : 'keyur'},
            {id : 26,name : 'denish'},
            {id : 44,name : 'vinit'}
        ]
    );
});

app.post('/api/student',function(req,res){
    var id = req.body.id;
    var name = req.body.name;
    console.log(id+" "+name);
    res.send('Hi');
});

app.put('/api/student/:id',function(req,res){
    var id = req.params.id;
    var name = req.body.name;
    console.log(id+" === "+name);
    res.send('Record Updated with id '+id);
});

app.listen(7700,()=>{
   console.log("Server Started on port 7700."); 
});