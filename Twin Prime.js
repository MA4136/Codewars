//      Twin Prime

/*      Instructions
description: https://www.codewars.com/kata/59b7ae14bf10a402d40000f3
A twin prime is a prime number that differs from another prime number by 2.
Write a function named is_twin_prime which takes an int parameter and returns true if it is a twin prime, else false.

        Examples
isTwinPrime(5) ==> true
isTwinPrime(7) ==> true
isTwinPrime(8) ==> false
isTwinPrime(16) ==> false
isTwinPrime(25) ==> false
isTwinPrime(953) ==> false
*/

function isPrime(num) {
    const square = Math.sqrt(num)
    for (let n = 2; n <= square; n++) {
        if (num % n === 0) return false
    }
    return num > 1
}

function isTwinPrime(number) {
    return isPrime(number) ? isPrime(number + 2) || isPrime(number - 2) : false
}

console.log(isTwinPrime(5), true)
console.log(isTwinPrime(7), true)
console.log(isTwinPrime(8), false)
console.log(isTwinPrime(16), false)
console.log(isTwinPrime(25), false)
console.log(isTwinPrime(953), false)

// node "Twin Prime"