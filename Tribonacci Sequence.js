//      Tribonacci Sequence

/*      Instructions
description: https://www.codewars.com/kata/556deca17c58da83c00002db

        Examples
tribonacci([1,2,3],10) ==> [1,2,3,6,11,20,37,68,125,230]
tribonacci([1,1,1],1) ==> [1]
tribonacci([300,200,100],0) ==> []
*/

function tribonacci(signature, n) {
    const result = signature
    for (let i = 3; i < n; i++) {
        result.push((result[i - 1] + result[i - 2] + result[i - 3]))
    }
    return result.slice(0, n)
}

console.log(tribonacci([1, 2, 3], 10))
console.log(tribonacci([1, 1, 1], 1))
console.log(tribonacci([300, 200, 100], 0))

// node "Tribonacci Sequence"