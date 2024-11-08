const { log } = require("console");
const express = require("express");
const app = express();
const path = require("path")
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');

// override with the X-HTTP-Method-Override header in the request
app.use(methodOverride('X-HTTP-Method-Override'));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// midleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));


// Fake database
let posts = [];

// Routes
app.get('/', (req, res) => {
    res.render('index', { posts });
});

app.post('/add', (req, res) => {
    const { title, imageUrl } = req.body;
    posts.push({ title, imageUrl });
    res.redirect('/');
});

app.post('/delete', (req, res) => {
    const { index } = req.body;
    posts.splice(index, 1);
    res.redirect('/');
});


app.listen(3000, () => {
    console.log("Server started on ", 3000);
})