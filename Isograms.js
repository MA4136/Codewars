//      Isograms

/*      Instructions
description: https://www.codewars.com/kata/54ba84be607a92aa900000f1
An isogram is a word that has no repeating letters, consecutive or non-consecutive.
Implement a function that determines whether a string that contains only letters is an isogram.

        Examples
isIsogram('Dermatoglyphics') ==> true
isIsogram('aba') ==> false
isIsogram('moOse') ==> false
*/

const isIsogram = (str) => {
    return new Set(str.toLowerCase()).size === str.length
}

console.log(isIsogram('Dermatoglyphics'))
console.log(isIsogram('aba'))
console.log(isIsogram('moOse'))

// node "Isograms"