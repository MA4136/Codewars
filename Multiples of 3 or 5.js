//      Multiples of 3 or 5
//      www.codewars.com

/*      Instructions
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
Note: If a number is negative, return 0.

        Examples
solution(10)  ==> 23
solution(128) ==> 3794
solution(200) ==> 9168
*/

function solution(number) {
    return number <= 0 ? 0 : Array.from(Array(number).keys())
        .filter((el, idx) => idx % 3 === 0 || idx % 5 === 0)
        .reduce((a, b) => a + b)
}

console.log(solution(10))
console.log(solution(200))
console.log(solution(-0))

// node "Multiples of 3 or 5"

// Correct!