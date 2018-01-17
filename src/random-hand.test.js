const randomHand = require( './random-hand' );

describe( 'randomHand()', () => {
	it( 'returns something with a length of 5', () => {
		expect( randomHand().length ).toEqual( 5 );
	} );

	for ( let i = 0; i < 1000; i += 1 ) {
		it( 'should not have the first two cards be the same', () => {
			const result = randomHand();
			expect( result[ 0 ] ).not.toEqual( result[ 1 ] );
		} );
	}
} );
