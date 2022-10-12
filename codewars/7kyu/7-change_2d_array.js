/**
 * Name: Change two-dimensional array
 * Description: Function receive a two-dimensional square array of random integers. On the main diagonal, all the negative integers must be changed to 0, while the others must be changed to 1 (Note: 0 is considered non-negative, here).
 */

function matrix(array) {
  for(let i = 0; i < array.length; i++) {
    array[i][i] = array[i][i] < 0 ? 0 : 1;
  }
  
  return array;
}