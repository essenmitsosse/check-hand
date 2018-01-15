const allCounts = require( './all-counts' );
const valuesFromHand = require( './values-from-hand' );

module.exports = ( hand ) => {
	const theCounts = allCounts( valuesFromHand( hand ) );
	return ( theCounts[ 0 ] === 3 && theCounts[ 1 ] === 2 );
};
