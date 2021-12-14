//      Even Fibonacci Sum

/*      Instructions
description: https://www.codewars.com/kata/55688b4e725f41d1e9000065
Give the summation of all even numbers in a Fibonacci sequence up to, but not including, the maximum value.
The Fibonacci sequence is a series of numbers where the next value is the addition of the previous two values.

        Examples
fibonacci(0) ==> 0
fibonacci(33) ==> 10
fibonacci(25997544) ==> 19544084
*/

function fibonacci(number) {
    let n1 = 0, n2 = 1, sum = 0, result = []

    while (sum < number) {
        result.push(sum)
        sum = n1 + n2
        n1 = n2
        n2 = sum
    }

    return result.filter(el => !(el % 2)).reduce((n, m) => n + m, 0)
}

console.log(fibonacci(0))
console.log(fibonacci(33))
console.log(fibonacci(25997544))

// node "Even Fibonacci Sum"