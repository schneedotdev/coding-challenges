/**
 * Name: Total amount of points
 * Description: Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.
 *
 * For example: ["3:1", "2:2", "0:1", ...]
 *
 * Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:
 *
 * if x > y: 3 points
 * if x < y: 0 point
 * if x = y: 1 point
 * 
 * Link: https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript
 */

function points(games) {
  return games.map(str => {
    let x = ~~str[0];
    let y = ~~str[2];
    
    if(x < y)
      return 0;
    else if(y < x)
      return 3;
    
    return 1;
  }).reduce((a, b) => a + b, 0);
}