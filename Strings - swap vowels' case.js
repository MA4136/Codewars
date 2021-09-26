//      Strings - swap vowels' case

/*      Instructions
description: https://www.codewars.com/kata/5803c0c6ab6c20a06f000026
Given a string, return a copy of the string with the vowels' case swapped.

        Examples
swapVowelCase(" ") ==> " "
swapVowelCase("to") ==> "tO"
swapVowelCase("The") ==> "ThE"
swapVowelCase("C Is AlIvE!") ==> "C is alive!"
*/

// #1
function swapVowelCase(string) {
    return [...string].map(el => el.match(/[aeoui]/g) ? el.toUpperCase() : el.match(/[AEOUI]/g) ? el.toLowerCase() : el).join('')
}

// #2
function swapVowelCase(string) {
    return string.replace(/[aeiou]/gi, el => /[AEIOU]/.test(el) ? el.toLowerCase() : el.toUpperCase())
}

console.log(swapVowelCase(' ') === ' ')
console.log(swapVowelCase('to') === 'tO')
console.log(swapVowelCase('The') === 'ThE')
console.log(swapVowelCase('C Is AlIvE!') === 'C is alive!')

// node "Strings - swap vowels' case"