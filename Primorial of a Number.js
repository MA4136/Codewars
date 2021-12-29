//      Primorial of a Number

/*      Instructions
description: https://www.codewars.com/kata/5a99a03e4a6b34bb3c000124
Is similar to factorial of a number, in primorial, not all the natural numbers get multiplied, only prime numbers are
multiplied to calculate the primorial of a number. It's denoted with P# and it is the product of the first n prime numbers.

        Examples
numPrimorial(3) ==> 30
numPrimorial(4) ==> 210
numPrimorial(5) ==> 2310
numPrimorial(8) ==> 9699690
numPrimorial(9) ==> 223092870
*/

function isPrime(num) {
    const square = Math.sqrt(num)
    for (let n = 2; n <= square; n++) {
        if (num % n === 0) return false
    }
    return num > 1
}

function numPrimorial(counter) {
    let primes = []
    let num = 2
    while (counter) {
        if (isPrime(num)) {
            primes.push(num)
            counter--
        }
        num++
    }
    return primes.reduce((n, m) => n * m)
}

console.log(numPrimorial(3), 30)
console.log(numPrimorial(4), 210)
console.log(numPrimorial(5), 2310)
console.log(numPrimorial(8), 9699690)
console.log(numPrimorial(9), 223092870)

// node "Primorial of a Number"