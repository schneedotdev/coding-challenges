function numberOfPairs(gloves) {
	const count = {};

	gloves.forEach((glove) => {
		count[glove] = (count[glove] || 0) + 1;
	});

	return Object.values(count)
		.map((e) => Math.floor(e / 2))
		.reduce((a, b) => a + b, 0);
}
