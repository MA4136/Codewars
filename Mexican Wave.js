//      Mexican Wave

/*      Instructions
description: https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

        Examples
wave('') ==> []
wave(' gap ') ==> [' Gap ', ' gAp ', ' gaP ']
wave('hello') ==> ['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO']
wave('codewars') ==> ['Codewars', 'cOdewars', 'coDewars', 'codEwars', 'codeWars', 'codewArs', 'codewaRs', 'codewarS']
*/

function wave(str) {
    return str ? Array.from(str, (el, idx) => el !== ' ' && str.slice(0, idx) + el.toUpperCase() + str.slice(++idx)).filter(Boolean) : []
}

console.log(wave(''))
console.log(wave(' gap '))
console.log(wave('hello'))
console.log(wave('codewars'))

// node "Mexican Wave"