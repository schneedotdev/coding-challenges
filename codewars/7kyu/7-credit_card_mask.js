/**
 * Name: Credit Card Mask
 * Description: Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it. Your task is to write a function maskify, which changes all but the last four characters into '#'.
 * Link: https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript
 */

function maskify(cc) {
  let mask = ''
  
  for (let i = 0; i < cc.length - 4; i++) {
    mask += '#'
  }
  
  return mask += cc.slice(-4)
}