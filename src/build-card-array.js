const suits = [ 'H', 'D', 'S', 'C' ];
const values = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K' ];

module.exports = () => {
	const tempArray = [];
	for ( let i = 0; i < values.length; i += 1 ) {
		for ( let j = 0; j < suits.length; j += 1 ) {
			tempArray.push( `${ values[ i ] }-${ suits[ j ] }` );
		}
	}
	return tempArray;
};
