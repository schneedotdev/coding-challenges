function sumOfDifferences(arr) {
	if (!arr.length) return 0;

	arr = arr.sort((a, b) => b - a);

	return arr[0] - arr[arr.length - 1];
}
