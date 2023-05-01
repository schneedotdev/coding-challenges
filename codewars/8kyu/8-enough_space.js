/**
 * Name: Will there be enough space?
 * Description: You have to write a function that accepts three parameters:

    cap is the amount of people the bus can hold excluding the driver.
    on is the number of people on the bus excluding the driver.
    wait is the number of people waiting to get on to the bus excluding the driver.

 * Link: https://www.codewars.com/kata/5875b200d520904a04000003/train/javascript
 */

function enough(cap, on, wait) {
	const totalPassengers = on + wait;
	return totalPassengers <= cap ? 0 : totalPassengers - cap;
}