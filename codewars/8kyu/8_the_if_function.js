/**
 * Name: The "if" function
 * Description: If the condition passed to the function <bool> is true, call function 1 otherwise call function 2.
 * Link: https://www.codewars.com/kata/54147087d5c2ebe4f1000805/train/javascript
 */

function _if(bool, func1, func2) {
	bool ? func1() : func2();
}
