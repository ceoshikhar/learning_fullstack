const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const mongoose = require('mongoose');

// setup express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use( bodyParser.json() );

// initialize routes
app.use( '/api', require('./routes/api') );

// listen for requests (`process.env.port` is to use an ENV defined port)
app.listen(	process.env.port || 5000, function() {
	console.log( 'http://localhost:5000' );
});

