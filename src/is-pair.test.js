const isPair = require( './is-pair' );

describe( 'isPair()', () => {
	it( 'finds a pair', () => {
		const result = isPair( [ '2-H', '3-C', '4-D', '5-H', '2-C' ] );
		expect( result ).toBeTruthy();
	} );
} );
