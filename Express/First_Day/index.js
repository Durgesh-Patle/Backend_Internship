//const express = require('express');
//const app = express();
//console.log(app);

// const { log } = require("console");
// // const { request } = require("http");

// const express = require("express");
// const app = express();

// const port = 3000;
// app.listen(port, () => {
//     console.log("examal app listening on port ${port}")
// });

//  app.use((req,res)=>{
//     console.log("request recevie");
//     // console.log(req);
//     res.send({
//         name:"Durgesh patle",
//         roll:"834789",
//         Age:"20",
//         adrees:"Bhoapl"
//     }); // Send the sesponce.  object (form).
//     // res.send("This is a Responce"); // Send the sesponce.  object (form).

//  });


// html Formate .

// <!-- form.ejs -->
// <html>
//   <head>
//     <title><%= title %></title>
//   </head>
//   <body>
//     <h1><%= title %></h1>
//     <form action="/submit" method="post">
//       <label for="name">Name:</label>
//       <input type="text" id="name" name="name"><br><br>
//       <label for="email">Email:</label>
//       <input type="email" id="email" name="email"><br><br>
//       <input type="submit" value="Submit">
//     </form>
//   </body>
// </html>

// table formate.
// app.use((req, res) => {
//     const html = `
//       <html>
//         <head>
//           <title>My Form</title>
//         </head>
//         <body>
  
//           <table>
//             <tr>
//               <th>Company</th>
//               <th>Contact</th>
//               <th>Country</th>
//             </tr>
//             <tr>
//               <td>Alfreds Futterkiste</td>
//               <td>Maria Anders</td>
//               <td>Germany</td>
//             </tr>
//             <tr>
//               <td>Centro comercial Moctezuma</td>
//               <td>Francisco Chang</td>
//               <td>Mexico</td>
//             </tr>
//           </table>
  
//           <p>To understand the example better, we have added borders to the table.</p>
  
//         </body>
//       </html>
//     `;
//     res.send(html);
//   });


// Get a fuction 

// app.get('/', (req,res)=> {
//     // Handle GET request for /users
//     res.send("Connect rot path");
// });

// app.get('/Home', (req,res)=> {
//     // Handle GET request for /users
//     res.send("Connect Home path");
// });

// app.get('/Project', (req,res)=> {
//     // Handle GET request for /users
//     res.send("Connect Project path");
// });

// app.get('/Services', (req,res)=> {
//     // Handle GET request for /users
//     res.send("Connect Services path");
// });

// app.get('/Skills',(req,res)=>{
//     res.send("This is Skills page");
// })

// app.post('/users', function(req, res) {
//     // Handle POST request for /users
//     res.send('POST request to /users');
// });





// 24/07/24


// Quiry String .

// const express = require('express');
// const app = express();

// app.get('/:username/:id', (req, res) => {
//   const { username, id } = req.params;
//   // do something with username and id
//   res.send(`Hello, ${username}! Your ID is ${id}.`);
// });

// app.get('/search', (req, res) => {
//   const { q } = req.query;
//   if (!q) {
//     res.status(400).send('<h1>Nothing searched</h1>');
//   } else {
//     // do something with the search query
//     res.send(`Searching for ${q}...`);
//   }
// });

// app.listen(3000, () => {
//   console.log('Server started on port 3000');
// });


