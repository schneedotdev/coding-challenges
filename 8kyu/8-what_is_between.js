function between(a, b) {
	let arr = [a];

	while (arr[arr.length - 1] < b) {
		arr.push(arr[arr.length - 1] + 1);
	}

	return arr;
}
