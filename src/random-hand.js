const buildCardArray = require( './build-card-array' );
const spliceCard = require( './splice-card' );

const randomHand = () => {
	const cards = [];
	let cardArray = buildCardArray();

	[ cards[ 0 ], cardArray ] = spliceCard( cardArray );
	[ cards[ 1 ], cardArray ] = spliceCard( cardArray );
	[ cards[ 2 ], cardArray ] = spliceCard( cardArray );
	[ cards[ 3 ], cardArray ] = spliceCard( cardArray );
	[ cards[ 4 ], cardArray ] = spliceCard( cardArray );

	return cards;
};

module.exports = randomHand;
