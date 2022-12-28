/**
 * Name: Heron's formula
 * Description: Heron's formula:
s∗(s−a)∗(s−b)∗(s−c)\sqrt{s * (s - a) * (s - b) * (s - c)}s∗(s−a)∗(s−b)∗(s−c)
where
s=a+b+c2s = \frac{a + b + c} 2s=2a+b+c​
 * Link: https://www.codewars.com/kata/57aa218e72292d98d500240f/train/javascript
 */

function heron(a, b, c) {
  const s = (a + b + c) / 2
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}