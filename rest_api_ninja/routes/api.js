const express = require( 'express' );
const router = express.Router();


// get a list of ninjas from the db
router.get( '/ninjas', function( req, res ) {
	res.send( { type: 'GET' } );
});

// add a ninja to the db
router.post( '/ninjas', function( req, res ) {
	console.log(req.body);
	res.send( {
		type: 'POST',
		name: req.body.name,
		rank: req.body.rank
	} );
});

// update info about a ninja to the db
router.put( '/ninjas/:id', function( req, res ) {
	res.send( { type: 'PUT' } );
});

// delete a ninja from the db
router.delete( '/ninjas/:id', function( req, res ) {
	res.send( { type: 'DELETE' } );
});


// export this module
module.exports = router;
