const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, default: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
         set: (v) => v === "" ? "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" : v},
    // image: { type: String, default: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg' },
    price: { type: Number, required: true, min: 0 },
    location: { type: String, required: true },
    country: { type: String, required: true },
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing