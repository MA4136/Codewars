//      Find the calculation type

/*      Instructions
description: https://www.codewars.com/kata/5aca48db188ab3558e0030fa
You have to create a function calcType, which receives 3 arguments: 2 numbers, and the result of an unknown operation performed on them (also a number).
Based on those 3 values you have to return a string, that describes which operation was used to get the given result.
The possible return strings are: 'addition', 'subtraction', 'multiplication', 'division'.

        Examples
calcType(1, 2, 3) ==> 'addition'
calcType(9, 5, 1.8) ==> 'division'
calcType(10, 5, 5) ==> 'subtraction'
calcType(10, 4, 40) ==> 'multiplication'
*/

function calcType(a, b, res) {
    switch (res) {
        case a + b:
            return 'addition'
        case a * b:
            return 'multiplication'
        case a - b:
            return 'subtraction'
        case a / b:
            return 'division'
        default:
            return 'no matching results'
    }
}

console.log(calcType(1, 2, 3) === 'addition')
console.log(calcType(9, 5, 1.8) === 'division')
console.log(calcType(10, 5, 5) === 'subtraction')
console.log(calcType(10, 4, 40) === 'multiplication')

// node "Find the calculation type"