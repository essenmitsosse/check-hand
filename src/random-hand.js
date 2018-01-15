const suits = [ 'H', 'D', 'S', 'C' ];
const values = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K' ];

const randomSuit = () => suits[ Math.floor( Math.random() * ( suits.length ) ) ];
const randomValue = () => values[ Math.floor( Math.random() * ( values.length ) ) ];
const randomCard = () => `${ randomValue() }-${ randomSuit() }`;
const randomHand = () => {
	const c = [];
	c.push( randomCard() );
	c.push( randomCard() );
	c.push( randomCard() );
	c.push( randomCard() );
	c.push( randomCard() );
	return c;
};

module.exports = {
	randomSuit, randomValue, randomCard, randomHand,
};
