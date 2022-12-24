/**
 * Name: Set alarm
 * Description: 
 * 
 * setAlarm(true, true) -> false
 * setAlarm(false, true) -> false
 * setAlarm(false, false) -> false
 * setAlarm(true, false) -> true
 *
 * Link: https://www.codewars.com/kata/568dcc3c7f12767a62000038/train/javascript
 */

function setAlarm(employed, vacation){
  return employed && !vacation
}