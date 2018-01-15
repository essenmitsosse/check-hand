const fourAway = require( './four-away' );
const noMultiples = require( './no-multiples' );

module.exports = ( values ) => {
	const sortedValues = values.sort();
	return fourAway( sortedValues ) && noMultiples( values );
};
