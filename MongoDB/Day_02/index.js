const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const Chat = require("./models/chat.js");
const newChat = require("./views/init.js");
const { log } = require('console');

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({extended:true}));

main().then(() => {
    console.log("Connections successful");
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/insta'); //if your database has auth enabled
}


// index route.
app.get("/chats",async(req,res)=>{
    let chats=await Chat.find();
    res.render("index.ejs",{chats});
    // console.log(chats);
    // res.send("Working");
})

// New Route.
app.get("/chats/new",(req,res)=>{
    // res.send("new chat");
    res.render("new.ejs");
})

// Create Route
app.post("/chat",(req,res)=>{
    let {from,to,msg}=req.body;
    let newChats =new Chat({
        from:from,
        to:to,
        msg:msg,
        // created_at:now Date();
    })
    
    // console.log(newChats);
    res.send("Hello!");
    res.redirect("/chats");

})

Chat.insertMany(newChat).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})

app.get("/", (req, res) => {
    res.send("Root is Working !!!");
})

app.listen(3000, () => {
    console.log("Server on listen the port 3000");
})