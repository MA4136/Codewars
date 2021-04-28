//      Valid string

/*      Instructions
description: https://www.codewars.com/kata/52f3bb2095d6bfeac2002196
You are given a sequence of valid words and a string. Test if the string is made up by one or more words from the array.
Test if the string can be entirely formed by concatenating words of the dictionary.

        Examples
validWord([], 'codewars') ==> false
validWord(['code', 'star', 'wars'], 'starwars') ==> true
validWord(['Star', 'Code', 'Wars'], 'StarCodeWars') ==> true
validWord(['Star', 'Code', 'Wars'], 'WarsStarCode') ==> true
validWord(['Star', 'Code', 'Wars'], 'CodeStarsWar') ==> false
*/

// #1
function validWord(dictionary, word) {
    if (!dictionary.length) return false
    return word ? dictionary.some(el => word.startsWith(el) && validWord(dictionary, word.slice(el.length))) : true
}

console.log(validWord([], 'codewars'), false)
console.log(validWord(['code', 'star', 'wars'], 'starwars'), true)
console.log(validWord(['Star', 'Code', 'Wars'], 'StarCodeWars'), true)
console.log(validWord(['Star', 'Code', 'Wars'], 'WarsStarCode'), true)
console.log(validWord(['Star', 'Code', 'Wars'], 'CodeStarsWar'), false)

// node "Valid string"