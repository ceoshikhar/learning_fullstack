const express = require('express');
const bodyParser = require('body-parser');
const script = require('./public/js/script');

// Create ExpressJS `app`
const app = express();
// Setup EJS template engine
app.set('view engine', 'ejs');
// Setup bodyParser object to read data from URL request
app.use(bodyParser.urlencoded({ extended: true }));
// Serve static files from `public` folder
app.use(express.static('public'));

const today = new Date();
const items = ['Buy food', 'Cook food', 'Eat food'];

const dateOptions = {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
};

const day = today.toLocaleDateString('en-US', dateOptions);

app.get('/', (req, res) => {
  res.render('list', { whichDay: day, nextTodoItems: items });
});

app.post('/', (req, res) => {
  let item = req.body.newTodoItem;
  items.push(item);
  res.redirect('/');
});

// Start the server
app.listen(process.env.PORT || 3000, () => {
  console.log('Server started at http://localhost:3000');
});
