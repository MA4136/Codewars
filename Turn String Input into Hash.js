//      Turn String Input into Hash

/*      Instructions
description: https://www.codewars.com/kata/52180ce6f626d55cf8000071
Please write a function that will take a string as input and return a hash. The string will be formatted as such.
The key will always be a symbol and the value will always be an integer.

        Examples
strToHash('') ==> {}
strToHash('a=1, b=2, c=3, d=4') ==> { 'a': 1, 'b': 2, 'c': 3, 'd': 4}
*/

function strToHash(str) {
    const result = {}
    str.split(', ').map(el => el.split('=')).map(el => result[el[0]] = Number(el[1]))
    return str ? result : {}
}

console.log(strToHash(''), {})
console.log(strToHash('a=1, b=2, c=3, d=4'))

// node "Turn String Input into Hash"