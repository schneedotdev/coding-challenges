/**
 * Name: For Twins: 2. Math operations
 * Description: A magician in the subway showed you a trick, he put an ice brick in a bottle to impress you. The brick's length and width are equal, forming a square; its height may be different. Just for fun and also to impress the magician and people around, you decided to calculate the brick's volume. Write a function iceBrickVolume that will accept these parameters:
 * 
 *  radius - bottle's radius (always > 0);
 *  bottleLength - total bottle length (always > 0);
 *  rimLength - length from bottle top to brick (always < bottleLength);

 * And return volume of ice brick that magician managed to put into a bottle.
 * 
 * Link: https://www.codewars.com/kata/59c287b16bddd291c700009a/train/javascript
 */

function iceBrickVolume(radius, bottleLength, rimLength) {
  let height = bottleLength - rimLength;
  let side = radius * Math.sqrt(2);
  return ~~(side * side * height);
}