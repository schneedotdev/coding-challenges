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
