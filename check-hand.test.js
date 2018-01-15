const checkHand = require( './check-hand' );

describe( 'checkHand()', () => {
	it( 'handles pairs', () => {
		const result = checkHand( [ '2-H', '3-C', '4-D', '5-H', '2-C' ] );
		expect( result ).toEqual( 'pair' );
	} );

	it( 'handles three of a kind', () => {
		const result = checkHand( [ '3-H', '3-C', '3-D', '5-H', '2-H' ] );
		expect( result ).toEqual( 'three of a kind' );
	} );
} );
