/**
 * Name: Surface Area and Volume of a Box
 * Description: Write a function that returns the total surface area and volume of a box as an array: [area, volume]
 * Link: https://www.codewars.com/kata/565f5825379664a26b00007c/train/javascript
 */
const getSize = (w, h, l) => [2*(l*w + w*h + l*h), w*h*l]