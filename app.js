var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var fs=require('fs');
var port=5000;
var request = require('request');
app.use(express.static(path.join(__dirname,'/client/dist/testproj/')));

const api = require('./routes/api.js');
app.use('/api', api);

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'./client/dist/testproj/index.html'));
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.listen(port,function(){
console.log(`Partner portal running on ${port}!`);
});
