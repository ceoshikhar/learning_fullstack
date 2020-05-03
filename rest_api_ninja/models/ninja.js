const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

// Create Ninja Schema

const NinjaSchema = new Schema({
	name: {
		type: String,
		required: [true, 'Name field is required']
	},
	
	rank: {
		type: String
	},

	available: {
		type: Boolean,
		default: false
	}

	// add geo location to the schemakk

});

// Create Ninja Model
const Ninja = mongoose.model( 'ninja', NinjaSchema );

// Export 'Ninja' model

module.exports = Ninja;