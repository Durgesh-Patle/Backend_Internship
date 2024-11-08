// app.js
const express = require('express');
const app = express();

const path = require('path');

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "/views"));

// app.get('/', (req, res) => {
//     res.render("home.ejs");
// });


// app.get('/home', (req, res) => {
//       res.send("home");
//     // console.log("Hello Guys");
// });


// app.get('/Profile', (req, res) => {
//     const user = {
//       name: "Durgesh",
//       Age: "20"
//     };

//     // const ran=Math.floor(Math.random()+1000);
//     res.render('Profile.ejs', { user }); 
//     // console.log("Hello Guys");
//   });


app.get('/login/:username', (req, res) => {
    let { username } = req.params;
    res.render('login.ejs', { username });
});



// app.get('/login/:id', (req, res) => {
//     res.render('login', { id: req.params.id });
//   });


// app.get('/Profile', (req, res) => {
//     const ran = Math.floor(Math.random() * 100); 
//     res.render('Profile.ejs', { ran }); 
//   });



app.listen(3000, () => {
    console.log('Server started on port 3000');
});