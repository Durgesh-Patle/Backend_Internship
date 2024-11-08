const mongoose = require('mongoose');

main().then(() => {
    console.log("Connection Sucessfull");
})

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}


// Create a Schema.
const mobileScheama = new mongoose.Schema({
    title: {
        type: 'String', // Use type: String for data type.
        required: true, // Ensure email is provided.
        maxLength: 20, //Username cannot be longer than 30 characters
        lowercase: true, // Automatically convert email to lowercase.
        unique: true, // Ensure email is unique across documents.
        trim: true, // Remove any leading or trailing whitespace.
        minlength: 3 // Minimum length validation
    },
    company: {
        type: 'String',
        required: true, // Ensure email is provided.
        maxLength: 20, //Username cannot be longer than 30 characters
        lowercase: true, // Automatically convert email to lowercase.
    },
    price: {
        type: Number,
        // required: true,
        min: 0, // Minimum
        max: 1000000000, // Maximum.
    },
    discount: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        required:true,
        enum: {
            values: ['available', 'Not Available'],
            message: 'Status must be one of: Available, Not Available'
        }
    }
});

const Mobile = mongoose.model("Mobile", mobileScheama);

let mobile1 = new Mobile({
    title: "IPhone",
    company: "Indian",
    price: "150000",
    status:"available"
})

mobile1.save().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})