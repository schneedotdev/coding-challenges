/**
 * Name: Mumbling
 * Description: 
 * accum("abcd") -> "A-Bb-Ccc-Dddd"
 * accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
 * accum("cwAt") -> "C-Ww-Aaa-Tttt"    
 */

function accum(s) {
    let arr = [];
  
    s.split('').forEach((c, i) => {
        arr.push(c.repeat(i + 1));
    });
  
    return arr.map(str => {
        return str.split('')
                .map((c, i) => (i === 0) ? c.toUpperCase() : c.toLowerCase())
                .join('');
    }).join('-')
}