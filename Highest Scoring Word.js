//      Highest Scoring Word

/*      Instructions
description: https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

        Examples
high('take me to semynak') ==> 'semynak'
high('man i need a taxi up to ubud') ==> 'taxi'
high('what time are we climbing up the volcano') ==> 'volcano'
*/

function high(string) {
    const values = string.split(' ').map(el => [...el].map(char => char.charCodeAt() - 96).reduce((n, m) => n + m, 0))
    const max = Math.max(...values)
    return string.split(' ')[values.indexOf(max)]
}

console.log(high('take me to semynak'))
console.log(high('man i need a taxi up to ubud'))
console.log(high('what time are we climbing up the volcano'))

// node "Highest Scoring Word"