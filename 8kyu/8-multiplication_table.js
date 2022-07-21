/**
 * Name: Multiplication table for number
 * Description: Your goal is to return multiplication table for number that is always an integer from 1 to 10.
 * Link: https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/train/javascript
 */

function multiTable(number) {
    let result = []
        
    for (let i = 1; i <= 10; i++){
      result.push(`${i} * ${number} = ${i * number}`)
    }
  
    return result.join('\n')
}