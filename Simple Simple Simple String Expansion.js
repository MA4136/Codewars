//      Simple Simple Simple String Expansion

/*      Instructions
description: https://www.codewars.com/kata/5ae326342f8cbc72220000d2
Given a string that includes alphanumeric characters ("3a4B2d") return the expansion of that string:
The numeric values represent the occurrence of each letter preceding that numeric value.
There should be no numeric characters in the final string.

Notes
The first occurrence of a numeric value should be the number of times each character behind it is repeated, until the next numeric value appears
If there are multiple consecutive numeric characters, only the last one should be used (ignore the previous ones)
Empty strings should return an empty string.
Your code should be able to work for both lower and capital case letters.

        Examples
stringExpansion('3D2a5d2f') ==> 'DDDaadddddff'
stringExpansion('3d332f2a') ==> 'dddffaa'
stringExpansion('a2bcde') ==> 'abbccddee'
stringExpansion('3abc') ==> 'aaabbbccc'
stringExpansion('abcde') ==> 'abcde'
stringExpansion('0d0a0v0t0y') ==> ''
*/

function stringExpansion(str) {
  let result = ''
  let count = 1

  for (let i = 0; i < str.length; i++) {
    if (/\d/.test(str[i])) {
      count = Number(str[i])
    } else {
      result += str[i].repeat(count)
    }
  }

  return result
}

console.log(stringExpansion('3D2a5d2f'))
console.log(stringExpansion('3d332f2a'))
console.log(stringExpansion('a2bcde'))
console.log(stringExpansion('3abc'))
console.log(stringExpansion('abcde'))
console.log(stringExpansion('0d0a0v0t0y'))
