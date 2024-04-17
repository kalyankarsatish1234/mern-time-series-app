const express=require("express");
const myrouter=express.Router();

var connection=require("../db/dbconnect");

myrouter.get("/getData",function(req,res){
    connection.query("Select * from `sample-data` limit 20",(err,data)=>{
        if(err){
            console.log("error occured "+err);
        }else{
            console.log(data);
            res.send(data);
        }
    })
})
myrouter.get("/forOneHour",function(req,res){
    connection.query("Select * from `sample-data` where ts between '2024-01-21T15:00:00Z' and '2024-01-21T15:01:00Z' ",(err,data)=>{
        if(err){
            console.log("error occured "+err);
        }else{
            console.log(data);
            res.send(data);
        }
    })
})
myrouter.get("/forEightHour",function(req,res){
    connection.query("Select * from `sample-data` where ts between '2024-01-21T15:00:00Z' and '2024-01-21T15:08:00Z' ",(err,data)=>{
        if(err){
            console.log("error occured "+err);
        }else{
            console.log(data);
            res.send(data);
        }
    })
})
myrouter.get("/forTwentyFourHour",function(req,res){
    connection.query("Select * from `sample-data` where ts between '2024-01-21T15:00:00Z' and '2024-01-21T15:23:69Z' ",(err,data)=>{
        if(err){
            console.log("error occured "+err);
        }else{
            console.log(data);
            res.send(data);
        }
    })
})





module.exports=myrouter;