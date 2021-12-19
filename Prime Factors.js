//      Prime Factors

/*      Instructions
description: https://www.codewars.com/kata/542f3d5fd002f86efc00081a
Write a function that generates factors for a given number.
The function takes an integer on the standard input and returns a list of integers. That list contains the prime factors in numerical sequence.

        Examples
primeFactors(1) ==> []
primeFactors(3) ==> [3]
primeFactors(8) ==> [2, 2, 2]
primeFactors(9) ==> [3, 3]
primeFactors(10) ==> [2, 5]
primeFactors(12) ==> [2, 2, 3]
*/

function primeFactors(num) {
    let factors = []
    for (let n = 2; n <= num; n++) {
        while (num % n === 0) {
            factors.push(n)
            num /= n
        }
    }

    return factors
}

console.log(primeFactors(1))
console.log(primeFactors(3))
console.log(primeFactors(8))
console.log(primeFactors(9))
console.log(primeFactors(10))
console.log(primeFactors(12))
console.log(primeFactors(30))

// node "Prime Factors"