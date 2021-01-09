//      Sum of all the multiples of 3 or 5
//      www.codewars.com

/*      Instructions
Your task is to write function findSum.
Upto and including n, this function will return the sum of all multiples of 3 and 5.

        Examples
solution(10)  ==> 33
solution(100) ==> 2418
solution(6700) ==> 10479918
*/

function findSum(number) {
    return Array.from(Array(number + 1).keys())
        .filter((el, idx) => idx % 3 === 0 || idx % 5 === 0)
        .reduce((a, b) => a + b)
}

console.log(findSum(10))
console.log(findSum(100))
console.log(findSum(6700))

// node "Sum of all the multiples of 3 or 5"

// Great!