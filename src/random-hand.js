const buildCardArray = require( './build-card-array' );

const randomHand = () => {
	const cards = [];
	const deckSize = 52;
	const cardArray = buildCardArray();

	cards.push( cardArray.splice( Math.floor( Math.random() * cardArray.length ), 1 )[ 0 ] );
	cards.push( cardArray.splice( Math.floor( Math.random() * cardArray.length ), 1 )[ 0 ] );
	cards.push( cardArray.splice( Math.floor( Math.random() * cardArray.length ), 1 )[ 0 ] );
	cards.push( cardArray.splice( Math.floor( Math.random() * cardArray.length ), 1 )[ 0 ] );
	cards.push( cardArray.splice( Math.floor( Math.random() * cardArray.length ), 1 )[ 0 ] );
	return cards;
};

module.exports = randomHand;
