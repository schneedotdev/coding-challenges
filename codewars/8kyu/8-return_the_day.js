/**
 * Name: Return the day
 * Description: Complete the function which returns the weekday according to the input number:
 * 
 * 1 returns "Sunday"
 * 2 returns "Monday"
 * 3 returns "Tuesday"
 * 4 returns "Wednesday"
 * 5 returns "Thursday"
 * 6 returns "Friday"
 * 7 returns "Saturday"
 * Otherwise returns "Wrong, please enter a number between 1 and 7"
 *
 * Link: https://www.codewars.com/kata/59dd3ccdded72fc78b000b25/train/javascript
 */

function whatday(num) { 
 const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  return num > 0 && num < 8
    ? days[num - 1]
    : "Wrong, please enter a number between 1 and 7"
}