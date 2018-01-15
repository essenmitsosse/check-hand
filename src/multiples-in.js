const highestCount = require( './highest-count' );
const valuesFromHand = require( './values-from-hand' );

module.exports = hand => highestCount( valuesFromHand( hand ) );
