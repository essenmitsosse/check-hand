const {
	randomSuit, randomValue, randomCard, randomHand,
} = require( './random-hand' );

describe( 'randomHand()', () => {
	it( 'returns something with a length of 5', () => {
		expect( randomHand().length ).toEqual( 5 );
	} );
} );

describe( 'randomCard()', () => {
	it( 'returns something', () => {
		expect( randomCard() ).toMatch( /\w{1,2}-[HDSC]/ );
	} );
} );
describe( 'randomValue()', () => {
	it( 'returns something', () => {
		expect( randomValue() ).toMatch( /\w{1,2}/ );
	} );
} );
describe( 'randomSuit()', () => {
	it( 'returns something', () => {
		expect( randomSuit() ).toMatch( /[HDSC]/ );
	} );
} );
