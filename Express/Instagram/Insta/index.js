const { log } = require("console");
const express = require("express");
const path = require("path"); 
const app = express();
const InstaData = require("./Data.json");

app.set('view engine', 'ejs');
app.set("views",path.join(__dirname,  "/views"));


// we will creating a json format & use it in to a folloernse
app.get("/Insta/:username" , (req,res)=>{
    let {username} = req.params;
    const data = InstaData[username];
    if(data){
    res.render('Instaprofile', {data});
    }else{
        res.render('nopage');
    }
})

app.listen(3000 , ()=>{
    console.log("server redy");
})