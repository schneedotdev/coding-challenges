function solution(a, b) {
	const arr = [a, b].sort((a, b) => a.length - b.length, 0);
	return arr[0] + arr[1] + arr[0];
}
