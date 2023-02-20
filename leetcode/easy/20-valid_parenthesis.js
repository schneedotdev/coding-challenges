/**
 * Name: Valid Parentheses
 * Description: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

 * Link: https://leetcode.com/problems/valid-parentheses/description/
 */

function isValid(str) {
   let stack = []

   const charMap = {
      '}': '{',
      ')': '(',
      ']': '['
   }

   for(let i = 0; i < str.length; i++) {
      const char = str[i]
      
      // char is an opening brace
      if(!charMap[char]) {
         stack.push(char)
      } else {
         const top = stack[stack.length - 1]

         // if the top of the stack is not an opening brace
         if(top !== charMap[char]) return false
         stack.pop()
      }    
   }

   return stack.length === 0
};