//      Sqrt approximation

/*      Instructions
description: https://www.codewars.com/kata/52ecde1244751a799b00018a

        Examples
sqrtApproximation(4)) ==> 2
sqrtApproximation(5)) ==> [ 2, 3 ]
sqrtApproximation(81)) ==> 9
sqrtApproximation(101)) ==> [ 10, 11 ]
sqrtApproximation(121)) ==> 11
sqrtApproximation(10001)) ==> [ 100, 101 ]
*/

function sqrtApproximation(number) {
    let m = 0
    for (m; m * m <= number; m++) {
        if (m * m === number) return m
    }
    return [m - 1, m]
}

console.log(sqrtApproximation(4))
console.log(sqrtApproximation(5))
console.log(sqrtApproximation(81))
console.log(sqrtApproximation(101))
console.log(sqrtApproximation(121))
console.log(sqrtApproximation(10001))

// node "Sqrt approximation"