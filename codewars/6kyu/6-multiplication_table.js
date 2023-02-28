/**
 * Name: Multiplication Table
 * Description: Your task, is to create N×N multiplication table, of size provided in parameter.
 * Link: https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript
 */

const multiplicationTable = (size) => {
  const table = []

  for(let i = 0; i < size; i++) {
    table.push([])
    for(let j = 1; j <= size; j++) {
      table[i].push((i + 1) * j)
    }
  }
  
  return table
}