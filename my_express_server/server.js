const express = require('express');

const app = express()

app.get('/', (req, res) => {
  res.send('<h1>This shit works yo</h1>');
});

app.listen(3000, function() {
  console.log("Server has started at http://localhost:3000");
});

