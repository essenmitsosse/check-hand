module.exports = ( values ) => {
	const counts = {};
	values.forEach( ( value ) => {
		counts[ value ] = 0;
		if ( value === values[ 0 ] ) {
			counts[ value ] += 1;
		}
		if ( value === values[ 1 ] ) {
			counts[ value ] += 1;
		}
		if ( value === values[ 2 ] ) {
			counts[ value ] += 1;
		}
		if ( value === values[ 3 ] ) {
			counts[ value ] += 1;
		}
		if ( value === values[ 4 ] ) {
			counts[ value ] += 1;
		}
	} );
	const totalCounts = Object.keys( counts ).map( key => counts[ key ] );
	return totalCounts.sort( ( a, b ) => b - a );
};
