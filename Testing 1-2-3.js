//      Testing 1-2-3

/*      Instructions
description: https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9
Write a function which takes a list of strings and returns each line prepended by the correct number.
The numbering starts at 1. The format is n: string. Notice the colon and space in between.

        Examples
testing([]) ==> []
testing(['a', 'b', 'c']) ==> ['1: a', '2: b', '3: c']
testing([ '', '', '', '', '' ]) ==> ['1: ', '2: ', '3: ', '4: ', '5: ']
*/

function testing(array) {
    return array.map((el, idx) => `${idx + 1}: ${el}`)
}

console.log(testing([]))
console.log(testing(['a', 'b', 'c']))
console.log(testing(['', '', '', '', '']))

// node "Testing 1-2-3"