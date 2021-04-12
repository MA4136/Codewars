//       Scramblies

/*      Instructions
description: https://www.codewars.com/kata/55c04b4cc56a697bb0000048
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

        Examples
scramble('katas','steak') ==> false
scramble('rkqodlw','world') ==> true
scramble('jscripts','javascript') ==> false
scramble('scriptjava','javascript') ==> true
scramble('aabbcamaomsccdd','commas') ==> true
scramble('scriptsjava','javascripts') ==> true
scramble('scriptingjava','javascript') ==> true
scramble('cedewaraaossoqqyt','codewars') ==> true
*/

// #1
// STDERR: Execution Timed Out (12000 ms)
function scramble(str1, str2) {
    return [...str2].every(el => str1.includes(el) && (str1 = str1.replace(el, '*')) && str1.length >= 0)
}

// #2
function scramble(str1, str2) {
    const characters = [...str1].reduce((acc, curr) => {
        (acc[curr]++) || (acc[curr] = 1)
        return acc
    }, {})
    return [...str2].every(el => --characters[el] >= 0)
}

// #3
function scramble(str1, str2) {
    return [...str2].every(el => str2.split(el).length <= str1.split(el).length)
}

console.log(scramble('katas', 'steak'))
console.log(scramble('rkqodlw', 'world'))
console.log(scramble('jscripts', 'javascript'))
console.log(scramble('scriptjava', 'javascript'))
console.log(scramble('aabbcamaomsccdd', 'commas'))
console.log(scramble('scriptsjava', 'javascripts'))
console.log(scramble('scriptingjava', 'javascript'))
console.log(scramble('cedewaraaossoqqyt', 'codewars'))

// node "Scramblies"