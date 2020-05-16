const express = require('express');
const bodyParser = require('body-parser');


const app = express();

// Parse the data
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Do the calculation
app.post('/', (req, res) => {
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);
  var result = n1 + n2;

  res.send('The result is: ' + result);
});

// Start the server
app.listen(3000, console.log('Server started at http://localhost:3000'));
