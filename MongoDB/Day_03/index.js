const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const path = require('path');
const app = express();
const Listing = require('./models/listing.js');

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method')); // Correct use of methodOverride

main().then(() => {
    console.log('Connections successful');
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/worldwideplace'); // if your database has auth enabled
}

app.get("/", (req, res) => {
    res.send("Root is Working");
});

app.get('/listings', async (req, res) => {
    const allListing = await Listing.find({});
    res.render('listings/index.ejs', { allListing });
});

// New route.
app.get('/listings/new', async (req, res) => {
    res.render('listings/new.ejs');
});

// Show More page.
// app.get('/listings/show', async (req, res) => {
//     let { id } = req.params;
//     const allListing = await Listing.findById(id);
//     res.render('listings/show.ejs',{allListing});
// });

// Show route
app.get('/listing/:id', async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render('listings/show.ejs', { listing });
});

// Create route
app.post('/listings', async (req, res) => {
    const newListing = new Listing(req.body.listing); // Ensure case sensitivity matches
    await newListing.save();
    res.redirect('/listings');
});

// Edit route
app.get('/listings/:id/edit', async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render('listings/edit.ejs', { listing });
    res.redirect("/listings");
});

// Update route
app.put('/listings/:id', async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, req.body.listing, { new: true });
    res.redirect(`/listing/${id}`);
});

// app.get("/testListing",async (req, res) => {
//     let sampleListing = new Listing({
//         title: "My house Video Play back Quality",
//         description: "Front of River",
//         price: 1500,
//         location: "Jabalpur",
//         country: "India",
//     });
//     await sampleListing.save();
//     console.log("sample was Save");
//     res.send("Test Listing is Working");
// });

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
