const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
const jsonData = require('./data.json');


app.get('/instagram', (req, res) => {
  res.render('instagram', jsonData);
});

// app.get("/instagram/:username", (req, res) => {
//   let { username } = req.params;
//   const data = InstaData[username];
//   res.render('instagram', { data });
// })

app.listen(3000, () => {
  console.log('Server started on port 3000');
});