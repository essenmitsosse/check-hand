const allCounts = require( './all-counts' );
const valuesFromHand = require( './values-from-hand' );

module.exports = ( hand ) => {
	const theCounts = allCounts( valuesFromHand( hand ) );
	return ( theCounts[ 0 ] === 2 && theCounts[ 1 ] === 2 );
};
