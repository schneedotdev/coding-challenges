/**
 * Name: A wolf in sheeps clothing
 * Description: Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:
 * Link: https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript
 */
function warnTheSheep(queue) {
	const wolfPosition = queue.reverse().indexOf('wolf');

	if (wolfPosition) {
		return `Oi! Sheep number ${wolfPosition}! You are about to be eaten by a wolf!`;
	}

	return 'Pls go away and stop eating my sheep';
}
