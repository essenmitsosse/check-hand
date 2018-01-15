const allTheSameSuit = require( './all-the-same-suit' );
const suitsFor = require( './suits-for' );

module.exports = hand => allTheSameSuit( suitsFor( hand ) );
