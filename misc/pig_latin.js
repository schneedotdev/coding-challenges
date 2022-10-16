/**
 * Name: pigLatin
 * Description: take a word and convert it to pig latin
 * 
    For words that begin with consonant sounds, the consonant before the initial vowel should be moved to the end of the word sequence and "ay" affixed. E.g
        "pig" = "igpay"
    For words that begin with consonant clusters, the clusters should be moved to the end of the word sequence and "ay" affixed. E.g
        "glove" = "oveglay"
    For words that begin with vowel sounds, simply add "way" to the end of the word. E.g
        "explain" = "explainway”

 * @param {string} string - takes in a word to convert to pig latin
 * @returns word converted to pig latin
 */
function pigLatin(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let index = 0
    let beginsWith = ''

    for (let i = 0; i < string.length; i++) {
        if (!vowels.includes(string[i])) {
            beginsWith += string[i]
        } else {
            index = i
            break;
        }
    }

    string = string.replace(beginsWith, '')

    if (index) {
        string += beginsWith
    } else {
        string += 'w'
    }

    return string + 'ay'
}

console.log(pigLatin('pig'), 'igpay')
console.log(pigLatin('explain'), 'explainway')
console.log(pigLatin('glove'), 'oveglay')