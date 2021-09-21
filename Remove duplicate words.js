//      Remove duplicate words

/*      Instructions
description: https://www.codewars.com/kata/5b39e3772ae7545f650000fc
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

        Examples
removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta') ==> 'alpha beta gamma delta'
*/

function removeDuplicateWords(string) {
    return [...new Set(string.split(' '))].join(' ')
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))

// node "Remove duplicate words"