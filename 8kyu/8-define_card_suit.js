/**
 * Name: Define a Card Suit
 * Description: You get any card as an argument. Your task is to return the suit of this card (in lowercase).
 *
 * ('3♣') -> return 'clubs'
 * ('3♦') -> return 'diamonds'
 * ('3♥') -> return 'hearts'
 * ('3♠') -> return 'spades'
 *
 * Link: https://www.codewars.com/kata/5a360620f28b82a711000047/train/javascript
 */

function defineSuit(card) {
	switch (card[1]) {
		case '♣':
			return 'clubs';
		case '♦':
			return 'diamonds';
		case '♥':
			return 'hearts';
		case '♠':
			return 'spades';
	}
}
