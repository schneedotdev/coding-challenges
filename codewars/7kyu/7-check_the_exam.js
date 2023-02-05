/**
 * Name: Check the exam
 * Description: The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
 * The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used). If the score < 0, return 0.
 * Link: https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/javascript
 */

function checkExam(array1, array2) {
 const score = array2.reduce((score, answer, i) => {
   if(answer === '') return score
   
   return answer === array1[i] ? score + 4 : score - 1
 }, 0)
 
 return score > 0 ? score : 0
}