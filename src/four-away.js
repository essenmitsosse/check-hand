module.exports = values => (
	(
		parseInt( values[ values.length - 1 ], 10 )
		- 4
		- parseInt( values[ 0 ], 10 )
	) === 0
);
