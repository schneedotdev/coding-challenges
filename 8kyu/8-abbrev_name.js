/**
 * Name: Abbreviate a two word name
 * Description: Turn a name like Sam Harris into S.H
 */

const abbrevName = name => {
    const arr = name.toUpperCase().split(' ');
    return `${arr[0][0]}.${arr[1][0]}`
}