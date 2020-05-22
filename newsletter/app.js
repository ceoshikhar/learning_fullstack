// Import modules for the project
const bodyParser = require('body-parser'); // Read body of response
const express = require('express'); // ExpressJS famework for API
const request = require('request'); // Simplified HTTP Requests

// Create an instance of ExpressJS
const app = express();

// Setup body parser
app.use(bodyParser.urlencoded({ extended: true }));

// Setup `public` static files for ExpressJS
app.use(express.static('public'));

// Load `signup.html` with the form on the root route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/html/signup.html');
});

// Read the `Form Data` on '/'
app.post('/', (req, res) => {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;

  // Create JS Object with data for `body` object in `options` for `request`
  const data = {
    email_address: email,
    status: 'subscribed',
    merge_fields: {
      FNAME: firstName,
      LNAME: lastName,
    },
  };

  // Transform the JS object into JSON data
  const jsonData = JSON.stringify(data);

  // Create `options` object to pass it to `request` function
  const options = {
    url: 'https://us18.api.mailchimp.com/3.0/lists/eab2923848/members/',
    method: 'POST',
    headers: {
      Authorization: 'shikhar a9ac2bc88b27b23b704b03fa2f9e3c5e-us18',
    },
    body: jsonData,
  };

  // Make the Mailchimp HTTP API request on form submission
  request(options, (error, response, body) => {
    // Handle Mailchimp server error
    if (error) {
      console.log(error);
      res.sendFile(__dirname + '/public/html/failure.html');
    } else {
      console.log(response.statusCode);
      // Handle success status code `200`
      if (response.statusCode === 200) {
        res.sendFile(__dirname + '/public/html/success.html');
      }
      // Handle any status code other than `200`
      if (error || response.statusCode != 200) {
        res.sendFile(__dirname + '/public/html/failure.html');
      }
    }
  });
});

// Handle '/failure' route for 'TRY AGAIN' button
app.post('/failure', (req, res) => {
  res.redirect('/');
});

// Start the server and listen on `PORT 3000`
app.listen('3000', () =>
  console.log('Server is running on http://localhost:3000')
);

// API Key -> a9ac2bc88b27b23b704b03fa2f9e3c5e-us18
// List/Audience ID -> eab2923848
