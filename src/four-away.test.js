const fourAway = require( './four-away' );

describe( 'fourAway()', () => {
	it( 'reports true if first and last are 4 away', () => {
		const result = fourAway( [ '2', '6' ] );
		expect( result ).toBeTruthy();
	} );
} );
