module.exports = ( cardArray ) => {
	const takeAway = cardArray.splice( Math.floor( Math.random() * cardArray.length ), 1 )[ 0 ];
	return [ takeAway, cardArray ];
};
