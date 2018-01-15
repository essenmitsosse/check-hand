const multiplesIn = require( './multiples-in' );

describe( 'multiplesIn()', () => {
	it( 'finds a duplicate', () => {
		const result = multiplesIn( [ '2-H', '3-C', '4-D', '5-H', '2-C' ] );
		expect( result ).toEqual( 2 );
	} );
} );
