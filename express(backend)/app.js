const express=require("express");

const app=express();

const bodyparser=require("body-parser");

const route=require("./routes/routers");

const cors=require("cors");

app.use(cors());

app.use(bodyparser.urlencoded({extended:false}));

app.use("/",route);

app.listen(9000,function(){
    console.log("Server started on port 9000");
})

module.exports=app;
