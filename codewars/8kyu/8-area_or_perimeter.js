/**
 * Name: Area or Perimeter
 * Description: You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.
 * Link: https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript
 */

const areaOrPerimeter = (l , w) => l === w ? l*w : l*2 + w*2