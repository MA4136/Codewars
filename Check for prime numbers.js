//      Check for prime numbers

/*      Instructions
description: https://www.codewars.com/kata/53daa9e5af55c184db00025f
In this kata you will create a function to check a non-negative input to see if it is a prime number.
The function will take in a number and will return True if it is a prime number and False if it is not.
A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

        Examples
isPrime(0) ==> false)
isPrime(1) ==> false)
isPrime(2) ==> true)
isPrime(11) ==> true)
isPrime(12) ==> false)
isPrime(61) ==> true)
isPrime(571) ==> true)
isPrime(573) ==> false)
isPrime(25) ==> false)
*/

function isPrime(num) {
    const square = Math.sqrt(num)
    for (let i = 2; i <= square; i++) {
        if (num % i === 0) return false
    }
    return num > 1
}

console.log(isPrime(0), false)
console.log(isPrime(1), false)
console.log(isPrime(2), true)
console.log(isPrime(11), true)
console.log(isPrime(12), false)
console.log(isPrime(61), true)
console.log(isPrime(571), true)
console.log(isPrime(573), false)
console.log(isPrime(25), false)

// node "Check for prime numbers"
// https://ru.wikipedia.org/wiki/Перебор_делителей