const isStraight = require( './is-straight' );
const isFlush = require( './is-flush' );

module.exports = hand => isStraight( hand ) && isFlush( hand );
