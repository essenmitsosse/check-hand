const spliceCard = require( './splice-card' );
const buildCardArray = require( './build-card-array' );

describe( 'spliceCard()', () => {
	it( 'returns two things', () => {
		expect( spliceCard( buildCardArray() ).length ).toEqual( 2 );
	} );
	it( 'returns the selected card', () => {
		expect( spliceCard( buildCardArray() )[ 0 ] ).toMatch( /\w{1,2}-[HDSC]/ );
	} );
	it( 'returns an array with one card gone', () => {
		expect( spliceCard( buildCardArray() )[ 1 ].length ).toEqual( buildCardArray().length - 1 );
	} );
} );
