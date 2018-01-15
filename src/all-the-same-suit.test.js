const allTheSameSuit = require( './all-the-same-suit' );

describe( 'allTheSameSuit()', () => {
	it( 'reports true if elements are the same', () => {
		const result = allTheSameSuit( [ 'D', 'D', 'D', 'D', 'D' ] );
		expect( result ).toBeTruthy();
	} );

	it( 'reports false if elements are not the same', () => {
		const result = allTheSameSuit( [ 'D', 'H', 'D', 'D', 'D' ] );
		expect( result ).toBeFalsy();
	} );
} );
