/**
 * Name: Return substring instance count
 * Description: Complete the solution so that it returns the number of times the search_text is found within the full_text.
 * Link: https://www.codewars.com/kata/5168b125faced29f66000005/train/javascript
 */

function solution(fullText, searchText){
  let instances = 0
  
  for(let i = 0; i < fullText.length; i+=searchText.length) {
    let group = ''
    
    for(let j = i; j < i + searchText.length; j++) {
      if(fullText[j] !== searchText[j - i]) {
        break;
      }
      
      group += fullText[j]
    }
    
    if(group === searchText) {
      instances += 1
    }
  }
  
  return instances
}