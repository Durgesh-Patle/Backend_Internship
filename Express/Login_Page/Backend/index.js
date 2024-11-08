const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like CSS)
// app.use(express.static(path.join(__dirname, 'public')));

// Serve the HTML form
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

// Handle form submission
app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    // Log or process the form data as needed
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Send a response back to the client
    res.send(`<h1>Thank you, ${name}!</h1><p>Your message has been received.</p>`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
