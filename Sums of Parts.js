//      Sums of Parts

/*      Instructions
description: https://www.codewars.com/kata/5ce399e0047a45001c853c2b

        Examples
partsSums([0, 1, 3, 6, 10]) ==> ( [0, 1, 3, 6, 10], ) ==> [20, 20, 19, 16, 10, 0]
                                  [1, 3, 6, 10],
                                  [3, 6, 10],
                                  [6, 10],
                                  [10],
                                  []
*/

// #1 STDERR
// Execution Timed Out (12000 ms)
function partsSums(array) {
    return array.map((_, idx) => array.slice(idx).reduce((acc, curr) => acc + curr, 0)).concat(0)
}

// #2
function partsSums(array) {
    array.unshift(0)
    let part = array.reduce((acc, curr) => acc + curr, 0)
    return array.map(el => part = part - el)
}

console.log(partsSums([]))
console.log(partsSums([0, 1, 3, 6, 10]))
console.log(partsSums([1, 2, 3, 4, 5, 6]))
console.log(partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]))

// node "Sums of Parts"