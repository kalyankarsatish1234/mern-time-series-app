const mysql=require("mysql2");

var mysqlconnection=mysql.createConnection({
    host: "127.0.0.1",
    user:'root',
    password:'Tejas12345',
    database:'test',
    port:3306
});

mysqlconnection.connect((err)=>{
    if(!err){
        console.log("Connection Successfull");
    }
    else{
        console.log("error in connection "+err);
    }
})
module.exports=mysqlconnection;