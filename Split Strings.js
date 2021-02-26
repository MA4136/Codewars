//      Split Strings
//      www.codewars.com

/*      Instructions
description: https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
Complete the solution so that it splits the string into pairs of two characters.
If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

        Examples
solution('') ==> []
solution('abc') ==> ['ab', 'c_']
solution('abcdef') ==> ['ab', 'cd', 'ef']
*/

function solution(str) {
    if (str.length === 0) return []
    const matches = str.match(/.{2}/gi)
    return str.length % 2 ? [...matches, str[str.length - 1] + '_'] : matches
}

console.log(solution(''))
console.log(solution('abc'))
console.log(solution('abcdef'))

// node "Split Strings"