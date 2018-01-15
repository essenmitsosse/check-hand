const valuesFromHand = require( './values-from-hand' );

describe( 'valuesFromHand()', () => {
	it( 'returns just the values from a hand', () => {
		const result = valuesFromHand( [ '2-H', '3-C', '4-D', '5-H', '2-C' ] );
		expect( result ).toEqual( [ '2', '3', '4', '5', '2' ] );
	} );
} );
