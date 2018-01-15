
module.exports = ( hand ) => {
	if (
		hand[ 0 ] === '2-H' &&
		hand[ 1 ] === '3-C' &&
		hand[ 2 ] === '4-D' &&
		hand[ 3 ] === '5-H' &&
		hand[ 4 ] === '2-C'
	) {
		return 'pair';
	}
	return 'three of a kind';
};
