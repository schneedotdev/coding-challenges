 /**
  * Name: Array Helpers
  * Description:
  * 
    square() must return a copy of the array, containing all values squared
    cube() must return a copy of the array, containing all values cubed
    average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
    sum() must return the sum of all array values
    even() must return an array of all even numbers
    odd() must return an array of all odd numbers

  */

Array.prototype.square = _ => this.map(num => num ** 2)

Array.prototype.cube = _ => this.map(num => num ** 3)

Array.prototype.average = function () {
    let len = this.length;
    let sum = this.reduce((acc, cur) => acc + cur, 0);
    return sum / len;
}

Array.prototype.sum = _ => this.reduce((acc, cur) => acc + cur, 0);

Array.prototype.even = _ => this.filter(num => num % 2 === 0);

Array.prototype.odd = _ => this.filter(num => num % 2 !== 0);