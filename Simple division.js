//      Simple division

/*      Instructions
description: https://www.codewars.com/kata/59ec2d112332430ce9000005
In this Kata, you will be given two numbers, a and b, and your task is to determine if the first number a is divisible by all the prime factors of the second number b.
For example: solve(15,12) = False because 15 is not divisible by all the prime factors of 12 (which include2).

        Examples
solve(2,256) ==> true
solve(2,253) ==> false
solve(9,243) ==> true
solve(15,12) ==> false
solve(21,2893401) ==> true
solve(21,2893406) ==> false
solve(54,2834352) ==> true
solve(54,2834359) ==> false
solve(1000013,7187761) ==> true
solve(1000013,7187762) ==> false
*/

function solve(first, second) {
    let primes = []
    let sieve = []

    for (let n = 2; n <= second; n++) {
        if (!sieve[n]) {
            primes.push(n)
            for (let m = n * n; m <= second; m += n) {
                sieve[m] = true
            }
        }
    }

    return primes.filter(el => second % el === 0).every(el => first % el === 0)
}

console.log(solve(2, 256), true)
console.log(solve(2, 253), false)
console.log(solve(9, 243), true)
console.log(solve(15, 12), false)
console.log(solve(21, 2893401), true)
console.log(solve(21, 2893406), false)
console.log(solve(54, 2834352), true)
console.log(solve(54, 2834359), false)
console.log(solve(1000013, 7187761), true)
console.log(solve(1000013, 7187762), false)

// node "Simple division"