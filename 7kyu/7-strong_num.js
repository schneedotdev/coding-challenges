/**
 * Name: Strong Number (Special Numbers Series #2) 
 * Description: Strong number is the number that the sum of the factorial of its digits is equal to number itself.
 * 
 * Link: https://www.codewars.com/kata/5a4d303f880385399b000001/train/javascript
 */
function strong(n) {
  const fact = String(n).split('')
                        .reduce((a, c) => a + factorial(c), 0);
  
  return String(n) === String(fact) ? "STRONG!!!!" : "Not Strong !!" ;
}

function factorial(n) {
  if (n < 0) return;
  if (n < 2) return 1;
  return n * factorial(n - 1);
}