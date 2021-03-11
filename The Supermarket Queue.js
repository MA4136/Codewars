//      The Supermarket Queue

/*      Instructions
description: https://www.codewars.com/kata/57b06f90e298a7b53d000a86

        Examples
queueTime([], 1) ==> 0
queueTime([1,2,3,4], 1) ==> 10
queueTime([2,2,3,3,4,4], 2) ==> 9
queueTime([1,2,3,4,5], 100) ==> 5
*/

function queueTime(customers, n) {
    const array = Array(n).fill(Number())
    return customers.length !== 0 ? Math.max(...customers.map(el => array[array.indexOf(Math.min(...array))] += el)) : 0
}

console.log(queueTime([], 1))
console.log(queueTime([1, 2, 3, 4], 1))
console.log(queueTime([2, 2, 3, 3, 4, 4], 2))
console.log(queueTime([1, 2, 3, 4, 5], 100))

// node "The Supermarket Queue"