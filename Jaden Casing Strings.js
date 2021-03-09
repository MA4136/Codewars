//      Jaden Casing Strings

/*      Instructions
description: https://www.codewars.com/kata/5390bac347d09b7da40006f6
Your task is to transform the strings so that each word in it begins with a capital letter.

        Examples
toJadenCase('do i feel lucky?') ==> 'Do I Feel Lucky?'
toJadenCase('well do ya, punk?') ==> 'Well Do Ya, Punk?'
*/

function toJadenCase(string) {
    return string.split(' ').map(el => el.replace(el[0], el[0].toUpperCase())).join(' ')
}

console.log(toJadenCase('do i feel lucky?'))
console.log(toJadenCase('well do ya, punk?'))

// node "Jaden Casing Strings"