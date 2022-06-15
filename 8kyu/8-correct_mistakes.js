/**
 * Name: Correct the mistakes of the character recognition software
 * Description: Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

    S is misinterpreted as 5
    O is misinterpreted as 0
    I is misinterpreted as 1

 * Link: https://www.codewars.com/kata/577bd026df78c19bca0002c0/train/javascript
 */
function correct(str) {
  return str.split('').map(char => {
    return isNum(char) ? correction[char] : char
  }).join('');
}

const isNum = char => {
  if(char !== '' && char !== ' ' && !isNaN(char)) {
    return true;
  }
  return false;
}

const correction = {
  '5': 'S',
  '0': 'O',
  '1': 'I'
}