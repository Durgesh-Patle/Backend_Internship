const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');

// Port definition
const PORT = process.env.PORT || 3000; // Default to port 3000 if not set

// Middleware
app.use(methodOverride('_method')); // Handle method override for DELETE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
    const { username, imageUrl, Caption } = req.body;
    if (username && imageUrl && Caption) { // Basic validation
        posts.push({ username, imageUrl, Caption });
    }
    res.redirect('/');
});

app.post('/delete', (req, res) => {
    const { index } = req.body;
    if (index >= 0 && index < posts.length) { // Check index validity
        posts.splice(index, 1);
    }
    res.redirect('/');
});

// Delete All Posts
app.delete('/', (req, res) => {
    posts = [];
    res.redirect('/');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
