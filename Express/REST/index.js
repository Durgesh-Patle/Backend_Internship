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


let posts = [
    {
        id: uuidv4(),
        username: "Jhone due",
        content: "PortFolip use exmaple name"
    },
    {
        id: uuidv4(),
        username: "Elon musk's",
        content: "Cyber truck on tranding"
    },
    {
        id: uuidv4(),
        username: "virat kohli",
        content: "I am the best in T20 world cup"
    }
]

app.get("/posts", (req, res) => {
    res.render("index", { posts })
})


app.get("/posts/new", (req, res) => {
    res.render('new')
})

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    // console.log(id);
    let post = posts.find((p) => id === p.id);

    res.render('show.ejs', { post }); // Id k Throw get kr pa rha he.
    // console.log(post);
    // res.send("request Working");    
})

app.patch('/posts/:id', (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    // console.log(post);
    // res.send("patch request Working");
    res.redirect("/posts"); // Method Return the 
})

// Render the only one data change.
app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render('edit.ejs', { post });
})

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });

    res.redirect("/posts"); // Method Return the 
    // res.send("hii")
    // posts.push(req.body);
})


// Delete one perticuler Post;
app.delete("/posts/:id", (req, res) => {
    const { id } = req.params;
    posts = posts.filter(post => post.id !== id);
    res.redirect("/posts");
})

// Delete All Posts .
app.delete("/posts", (req, res) => {
    posts = [];
    res.redirect("/posts");
})

app.listen(3000, () => {
    console.log("Server started on ", 3000);
})