/**
 * Name: Do you speak "English"?
 * Description: Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".
 * Link: https://www.codewars.com/kata/58dbdccee5ee8fa2f9000058/train/javascript
 */

function spEng(sentence){
 return sentence.toLowerCase().includes('english')
}