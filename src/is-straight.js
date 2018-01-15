const cardsInSequence = require( './cards-in-sequence' );
const valuesFromHand = require( './values-from-hand' );

module.exports = hand => cardsInSequence( valuesFromHand( hand ) );
