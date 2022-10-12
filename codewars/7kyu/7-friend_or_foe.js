/**
 * Name: Friend or Foe?
 * Description: If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
 * Link: https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript
 */
function friend(friends){
  return friends.filter(friend => friend.length === 4);
}