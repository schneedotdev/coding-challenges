/**
 * Name: Remove Anchor from URL
 * Description: Complete the function/method so that it returns the url with anything after the anchor (#) removed. 
 * Link: https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/javascript
 */

function removeUrlAnchor(url){
  const i = url.indexOf('#');
  return i > 0 ? url.substring(0, i) : url
}