const mongoose = require('mongoose');

main().then(() => {
    console.log("Connection Sucessfull");
})

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userScheama = new mongoose.Schema({
    name: String, // String is shorthand for {type: String}
    author: String,
    email: String,
    age: Number,
});

const User = mongoose.model("user", userScheama);

// const user2 = [
//     {
//         name: "Durgesh Patle",
//         email: "durgesh@gmail.com",
//         age: 25
//     },
// ];

// Save multiple user documents
// User.insertMany([{
//     name: "Durgesh",
//     email: "durgesh@gmail.com",
//     age: 20
// },
// {
//     name: "Bhane",
//     email: "bhane@gmail.com",
//     age: 19
// },
// {
//     name: "Abhay",
//     email: "abhay@gmail.com",
//     age: 21
// }])
//     .then((res) => console.log('Users saved successfully:', res))
//     .catch((err) => console.error('Error saving users:', err));


// id throw find the data.
// User.findById({_id:"66a9e078e385ffd41202b018"}).then((res) => console.log(res))
//     .catch((err) => console.error('Error saving users:', err));


// // update Onedata.
// User.updateOne({ name: "Abhay" }, { age: 89 }).then((res) => console.log(res))
//     .catch((err) => console.error('Error saving users:', err));


// update many data.

// User.updateMany({ age:{$gt:19}}, { age: 89 }).then((res) => console.log(res))
//     .catch((err) => console.error('Error saving users:', err));



// update One and Update data.
User.findOneAndUpdate({age:20}, {name:"magru" }).then((res) => console.log(res))
    .catch((err) => console.error('Error saving users:', err));
