/**
 * Name: Data Reverse
 * Description: 
 * 11111111  00000000  00001111  10101010
 * (byte1)   (byte2)   (byte3)   (byte4)
 *
 * should become
 *
 * 10101010  00001111  00000000  11111111
 * (byte4)   (byte3)   (byte2)   (byte1)
 *
 * Data is given as: [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
 */

function dataReverse(data) {
  let data_copy = []

  data.reverse()

  while (data.length)
    data_copy.push(data.splice(0, 8).reverse());

  return [].concat.apply([], data_copy); // data_copy.flat(1) <-- 1 defines the depth
}