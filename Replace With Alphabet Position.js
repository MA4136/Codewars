//      Replace With Alphabet Position

/*      Instructions
description: https://www.codewars.com/kata/546f922b54af40e1e90001da
In this kata you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it. 'a' = 1, 'b' = 2, etc.

        Examples
alphabetPosition('(=+| #}]') ==> ''
alphabetPosition('The narwhal bacons at midnight.') ==> '20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20'
alphabetPosition('The sunset sets at twelve o' clock.') ==> '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11'
*/

// #1
function alphabetPosition(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    return Array.from(text.replace(/[^a-z]/gi, '').toLowerCase(), el => alphabet.indexOf(el) + 1).join(' ')
}

// #2
function alphabetPosition(text) {
    return text.toUpperCase().replace(/[^a-z]/gi, '').split('').map(el => el.charCodeAt(0) - 64).join(' ')
}

// #3
function alphabetPosition(text) {
    const results = text.match(/[a-z]/gi)
    return results && results.map((el) => el.toLowerCase().charCodeAt() - 96).join(' ') || ''
}

console.log(alphabetPosition('(=+| #}]'))
console.log(alphabetPosition('The narwhal bacons at midnight.'))
console.log(alphabetPosition('The sunset sets at twelve o\' clock.'))

// node "Replace With Alphabet Position"