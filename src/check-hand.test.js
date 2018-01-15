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

	it( 'handles four of a kind', () => {
		const result = checkHand( [ '3-H', '3-C', '3-D', '3-S', '2-H' ] );
		expect( result ).toEqual( 'four of a kind' );
	} );

	it( 'handles high card', () => {
		const result = checkHand( [ '2-H', '5-C', '9-D', '7-S', '3-H' ] );
		expect( result ).toEqual( 'high card' );
	} );

	it( 'handles two pair', () => {
		const result = checkHand( [ '2-D', '2-H', '3-H', '3-D', '8-D' ] );
		expect( result ).toEqual( 'two pair' );
	} );

	it( 'handles flush', () => {
		const result = checkHand( [ '2-H', '5-H', '9-H', '7-H', '3-H' ] );
		expect( result ).toEqual( 'flush' );
	} );

	it( 'handles straight', () => {
		const result = checkHand( [ '1-H', '2-H', '3-H', '4-H', '5-D' ] );
		expect( result ).toEqual( 'straight' );
	} );

	it( 'handles straight flush', () => {
		const result = checkHand( [ '1-H', '2-H', '3-H', '4-H', '5-H' ] );
		expect( result ).toEqual( 'straight flush' );
	} );

	it( 'handles full house', () => {
		const result = checkHand( [ '2-D', '2-H', '3-H', '3-D', '3-C' ] );
		expect( result ).toEqual( 'full house' );
	} );
} );
