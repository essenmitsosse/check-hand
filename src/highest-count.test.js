const highestCount = require( './highest-count' );


describe( 'highestCount()', () => {
	it( 'returns count of the most common card from array', () => {
		const result = highestCount( [ '2', '4', '4', '4', '2' ] );
		expect( result ).toEqual( 3 );
	} );
} );
