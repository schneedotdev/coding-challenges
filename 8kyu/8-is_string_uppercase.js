/**
 * Name: Is the string uppercase?
 * Description: Create a method to see whether the string is ALL CAPS.
 * Link: https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript
 */

String.prototype.isUpperCase = function () {
    return this.toString() === this.toUpperCase()
}