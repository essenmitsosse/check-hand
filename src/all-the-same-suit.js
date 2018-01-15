module.exports = ( suits ) => {
	let toReturn = true;
	suits.forEach( ( suit ) => {
		if ( suit !== suits[ 0 ] ) {
			toReturn = false;
		}
	} );
	return toReturn;
};
