/**
 * Name: Extract the domain name from a URL
 * Description: Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
 * 
 *  url = "http://github.com/carbonfive/raygun" -> domain name = "github"
 * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
 * url = "https://www.cnet.com"                -> domain name = cnet"
 *
 * Link: https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
 */

function domainName(url) {
    if (url.includes('https'))
        url = url.split('https://').join('')
    else
        url = url.split('http://').join('')

    url = url.split('www.').join('').split('')

    return url.splice(0, url.indexOf('.')).join('')
}

function domainName(url) {
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
};