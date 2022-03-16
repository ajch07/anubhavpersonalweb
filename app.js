const cool=require("cool-ascii-faces");
const express=require("express");
const bodyParser=require("body-parser");
const { appendFile } = require("fs");

const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){
    res.sendFile(__dirname +"/index.html");
})
app.get('/cool', (req, res) => res.send(cool()));




app.listen(process.env.PORT || 5000 ,function(){
    console.log("server is running at port 3000");
})