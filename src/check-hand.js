const isPair = require( './is-pair' );
const isTwoPair = require( './is-two-pair' );
const isTriple = require( './is-triple' );
const isQuadruple = require( './is-quadruple' );
const isFullHouse = require( './is-full-house' );
const isStraightFlush = require( './is-straight-flush' );
const isFlush = require( './is-flush' );
const isStraight = require( './is-straight' );

module.exports = ( hand ) => {
	if ( isTwoPair( hand ) ) {
		return 'two pair';
	} if ( isPair( hand ) ) {
		return 'pair';
	} else if ( isFullHouse( hand ) ) {
		return 'full house';
	} else if ( isTriple( hand ) ) {
		return 'three of a kind';
	} else if ( isQuadruple( hand ) ) {
		return 'four of a kind';
	} else if ( isStraightFlush( hand ) ) {
		return 'straight flush';
	} else if ( isFlush( hand ) ) {
		return 'flush';
	} else if ( isStraight( hand ) ) {
		return 'straight';
	}

	return 'high card';
};
