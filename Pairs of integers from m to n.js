//      Pairs of integers from m to n

/*      Instructions
description: https://www.codewars.com/kata/588e2a1ad1140d31cb00008c
Implement a function that receives two integers m and n and generates a sorted list of pairs (a, b) such that m <= a <= b <= n

        Examples
generatePairs(2, 4) ==> [ [ 2, 2 ], [ 2, 3 ], [ 2, 4 ], [ 3, 3 ], [ 3, 4 ], [ 4, 4 ] ]
generatePairs(0, 0) ==> [ [ 0, 0 ] ]
generatePairs(9, 1) ==> []
*/

function generatePairs(m, n) {
    const pairs = []
    for (let i = m; i <= n; ++i) {
        for (let k = i; k <= n; ++k) {
            pairs.push([i, k])
        }
    }
    return pairs
}

console.log(generatePairs(2, 4))
console.log(generatePairs(0, 0))
console.log(generatePairs(9, 1))

// node "Pairs of integers from m to n"