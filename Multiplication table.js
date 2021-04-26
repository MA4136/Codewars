//      Multiplication table

/*      Instructions
description: https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08
Your task, is to create NxN multiplication table, of size provided in parameter.

        Examples
multiplicationTable(3) ===> [ [ 1, 2, 3 ], [ 2, 4, 6 ], [ 3, 6, 9 ] ]
multiplicationTable(4) ===> [ [ 1, 2, 3, 4 ], [ 2, 4, 6, 8 ], [ 3, 6, 9, 12 ], [ 4, 8, 12, 16 ] ]
multiplicationTable(5) ===> [ [ 1, 2, 3, 4, 5 ], [ 2, 4, 6, 8, 10 ], [ 3, 6, 9, 12, 15 ], [ 4, 8, 12, 16, 20 ], [ 5, 10, 15, 20, 25 ] ]
*/

function multiplicationTable(size) {
    return Array.from({length: size}, (_, idx) => ++idx)
        .map(el => Array.from({length: size}, (_, idx) => el * (++idx))
        )
}

console.log(multiplicationTable(3))
console.log(multiplicationTable(4))
console.log(multiplicationTable(5))

// node "Multiplication table"