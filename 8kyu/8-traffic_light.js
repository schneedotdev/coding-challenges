/**
 * Name: Thinkful - Logic Drills: Traffic light
 * Description: Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
 * Link: https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript
 */
function updateLight(current) {
  const lights = ['green', 'yellow', 'red'];
  const i = lights.indexOf(current);
  return i === 2 ? lights[0] : lights[i + 1];
}