const randomHand = require( './random-hand' );

describe( 'randomHand()', () => {
	it( 'returns something with a length of 5', () => {
		expect( randomHand().length ).toEqual( 5 );
	} );
} );
