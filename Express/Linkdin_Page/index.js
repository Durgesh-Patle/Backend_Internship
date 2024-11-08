const { log } = require("console");
const express = require("express");
const path = require("path"); 
const app = express();
const InstaData = require("./Data.json");

app.set('view engine', 'ejs');
app.set("views",path.join(__dirname,  "/views"));


// we will creating a json format & use it in to a folloernse
app.get("/Link/:username" , (req,res)=>{
    let {username} = req.params;
    const data = InstaData[username];
    if(data){
    res.render('Linkdin', {data});
    }else{
        res.render('nopage');
    }
})

app.listen(8080 , ()=>{
    console.log("server redy");
})

 // "image1": "https://marketplace.canva.com/EAE1oe3H6Sc/1/0/1600w/canva-black-elegant-minimalist-profile-linkedin-banner-nc0eALdRvKU.jpg",