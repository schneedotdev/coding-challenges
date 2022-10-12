/**
 * Name: Series #2 Clock
 * Descritpion: convert hours, minutes and seconds to milliseconds/
 * Link: https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
 */

function past(h, m, s){
  return hrsToMS(h) + minsToMS(m) + secsToMS(s);
}

const hrsToMS = hours => hours * 3600000;
const minsToMS = mins => mins * 60000;
const secsToMS = secs => secs * 1000;