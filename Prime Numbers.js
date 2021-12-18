//      Prime Numbers

/*      Instructions
description: https://www.codewars.com/kata/52dd72494367608ac1000416
You will need to create logic for the following two functions: isPrime(number) and getPrimes(start, finish)

isPrime(number)
Should return boolean true if prime, otherwise false

getPrimes(start, finish)
Should return a unique, sorted array of all primes in the range [start, finish] (i.e. both numbers inclusive).
Note that this range can go both ways - e.g. getPrimes(10, 1) should return all primes from 1 to 10 both inclusive.

        Examples
isPrime(0), false);
isPrime(1), false);
isPrime(2), true);
isPrime(3), true);
isPrime(4), false);
isPrime(5), true);

getPrimes(0, 0).join(), '');
getPrimes(0, 30).join(), '2,3,5,7,11,13,17,19,23,29');
getPrimes(30, 0).join(), '2,3,5,7,11,13,17,19,23,29');
*/

function isPrime(num) {
    const square = Math.sqrt(num)
    for (let n = 2; n <= square; n++) {
        if (num % n === 0) return false
    }
    return num > 1
}

function getPrimes(num1, num2) {
    let [start, end] = [num1, num2].sort((n, m) => n - m)
    let primes = [...Array.from({length: ++end}).keys()]

    return primes.slice(start).filter(el => isPrime(el))
}

console.log(isPrime(0), false)
console.log(isPrime(1), false)
console.log(isPrime(2), true)
console.log(isPrime(3), true)
console.log(isPrime(4), false)
console.log(isPrime(5), true)

console.log(getPrimes(0, 0).join(), '')
console.log(getPrimes(0, 30).join(), '2,3,5,7,11,13,17,19,23,29')
console.log(getPrimes(30, 0).join(), '2,3,5,7,11,13,17,19,23,29')
console.log(getPrimes(101, 199).join(), '101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199')

// node "Prime Numbers"