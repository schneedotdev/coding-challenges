/**
 * Name: Two fighters, one winner.
 * Description: Create a function that returns the name of the winner in a fight between two fighters.
 * Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.
 *
 * Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
 *
 * Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.
 *
 * Link: https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/train/javascript
 */
function declareWinner(fighter1, fighter2, firstAttacker) {
	let first = {};
	let second = {};
	let turn = 1;

	if (firstAttacker === fighter1.name) {
		first = fighter1;
		second = fighter2;
	} else {
		first = fighter2;
		second = fighter1;
	}

	while (second.health > 0 && first.health > 0) {
		if (turn % 2) second.health -= first.damagePerAttack;
		else first.health -= second.damagePerAttack;

		turn++;
	}

	return turn % 2 ? second.name : first.name;
}
