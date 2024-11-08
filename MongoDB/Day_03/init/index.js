const mongoose=require("mongoose");
const initData= require("./data.js");
const path=require("path");
const Listing=require("../models/listing.js");

main().then(() => {
    console.log("Connections successful");
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/worldwideplace'); //if your database has auth enabled
}

const initDB=async ()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("Data was initalized");
};

initDB();