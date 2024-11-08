const express = require('express');
const app = express();


app.use(express.urlencoded({extended:true}));

app.use(express.json());

app.get("/register/",(req,res)=>{
    let {user,password} = req.query;
    res.send(`Get Responce, Welcome ${user}, ${password}`);
    console.log(req.body);
    // console.log("Accepted get Request");
    // res.send("Hello");
})

app.post("/register", (req, res) => {
    let {user,password} = req.body;
    res.send(`Get Request, Welcome ${user} , ${password}`);

    // console.log(req.body);     // { username: 'johnDoe', password: 'password123' }
    // res.send("Registration successful!");
    // console.log("Accepted get Responce");

    // res.send("Accepted get Responce");
  });


app.listen(3000, () => {
    console.log('Server running on port 3000');
  });