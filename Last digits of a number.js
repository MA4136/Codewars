//      Last digits of a number

/*      Instructions
description: https://www.codewars.com/kata/5cd5ba1ce4471a00256930c0
Your job is to implement a function which returns the last D digits of an integer N as a list.

        Examples
lastDigit(0,1) ==> [0]
lastDigit(1,1) ==> [1]
lastDigit(1234,0) ==> []
lastDigit(24134,-4) ==> []
lastDigit(1343,5) ==> [1,3,4,3]
lastDigit(123767,4) ==> [3,7,6,7]
lastDigit(34625647867585,10) ==> [5,6,4,7,8,6,7,5,8,5]
*/

function lastDigit(number, digits) {
    if (digits <= 0) return []
    if (digits > String(number).length) return [...String(number)].map(Number)
    return [...String(number)].slice(-digits).map(Number)
}

console.log(lastDigit(0, 1), [0])
console.log(lastDigit(1, 1), [1])
console.log(lastDigit(1234, 0), [])
console.log(lastDigit(24134, -4), [])
console.log(lastDigit(1343, 5), [1, 3, 4, 3])
console.log(lastDigit(123767, 4), [3, 7, 6, 7])
console.log(lastDigit(34625647867585, 10), [5, 6, 4, 7, 8, 6, 7, 5, 8, 5])

// node "Last digits of a number"