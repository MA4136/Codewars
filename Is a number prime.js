//      Is a number prime?
//      www.codewars.com

/*      Instructions
description: https://www.codewars.com/kata/5262119038c0985a5b00029f
Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.

        Examples
isPrime(73) ==> true
isPrime(75) ==> false
isPrime(-1) ==> false
*/

function isPrime(num) {
    const square = Math.sqrt(num)
    for (let i = 2; i <= square; i++) {
        if (num % i === 0) return false
    }
    return num > 1
}

console.log(isPrime(73))
console.log(isPrime(75))
console.log(isPrime(-1))

// node "Is a number prime"
// https://ru.wikipedia.org/wiki/Перебор_делителей