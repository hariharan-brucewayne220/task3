const mongoose = require('mongoose');//to connect the database
const express=require('express');
const bodyParser=require('body-parser');
const userDB = mongoose.createConnection('mongodb://interntest:easyas123@interncluster-shard-00-00-zmzoh.mongodb.net:27017,interncluster-shard-00-01-zmzoh.mongodb.net:27017,interncluster-shard-00-02-zmzoh.mongodb.net:27017/test?ssl=true&replicaSet=InternCluster-shard-0&authSource=admin&retryWrites=true', {useNewUrlParser : true});
userDB.once('open', function(){console.log('Connected to MongoDB Atlas.');});
userDB.on('error', function(err){console.log('Database ERROR: ' + err);});

const app=express(); /// to access RESTful APIs
app.use(bodyParser.json());//to parse the json objects



const books=require('./schemas/details');
app.get("/",function(req,res){
    
    res.send({type:'GET'});
})

//app.PUT("/",function(req,res){
    
   // res.send({type:'PUT'});
//})


app.post("/",function(req,res){
    books.create(req.body).then(res.send("Success"));
    
     
    
})


app.listen(process.env.port||3001,function(){
    console.log("connected to the port");
});