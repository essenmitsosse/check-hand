const noMultiples = require( './no-multiples' );

describe( 'noMultiples()', () => {
	it( 'reports true when all elements are different', () => {
		const result = noMultiples( [ '2', '6' ] );
		expect( result ).toBeTruthy();
	} );

	it( 'reports false when two elements are the same', () => {
		const result = noMultiples( [ '2', '2' ] );
		expect( result ).toBeFalsy();
	} );
} );
