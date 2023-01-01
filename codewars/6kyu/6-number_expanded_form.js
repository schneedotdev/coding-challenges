/**
 * Name: Write Number in Expanded Form
 * Description: ou will be given a number and you will need to return it as a string in Expanded Form. 
 * 
 * expandedForm(12); // Should return '10 + 2'
 * expandedForm(42); // Should return '40 + 2'
 * expandedForm(70304); // Should return '70000 + 300 + 4'
 * 
 * NOTE: All numbers will be whole numbers greater than 0.
 * 
 * Link: https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript
 */

function expandedForm(num) {
  const numAsArr = [...num.toString()].map(Number)
  
  const values = numAsArr.map((num, i) => {
    let current = num
    
    for (let j = numAsArr.length - 1; j > i; j--) {
      current = current * 10
    }
    
    return current
  })
  
  return values.filter(value => value).join(' + ')
}