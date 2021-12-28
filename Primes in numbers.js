//      Primes in numbers

/*      Instructions
description: https://www.codewars.com/kata/54d512e62a5e54c96200019e
Given a positive number n > 1 find the prime factor decomposition of n.
The result will be a string with the following form: "(p1**n1)(p2**n2)...(pk**nk)". With the p(i) in increasing order and n(i) empty if n(i) is 1.

        Examples
primeFactors(137) ==> '(137)')
primeFactors(72284) ==> '(2**2)(17)(1063)')
primeFactors(86240) ==> '(2**5)(5)(7**2)(11)')
primeFactors(7966684) ==> '(2**2)(11)(181061)')
primeFactors(7775460) ==> '(2**2)(3**3)(5)(7)(11**2)(17)')
*/

function primeFactors(num) {
    let primes = {}
    for (let n = 2; num > 1; n++) {
        if (num % n === 0) {
            while (num % n === 0) {
                primes[n] = primes[n] ? ++primes[n] : 1
                num /= n
            }
        }
    }
    return Object.keys(primes)
        .map(el => primes[el] === 1 ? '(' + el + ')' : '(' + el + '**' + primes[el] + ')')
        .join('')
}

console.log(primeFactors(137) === '(137)')
console.log(primeFactors(72284) === '(2**2)(17)(1063)')
console.log(primeFactors(86240) === '(2**5)(5)(7**2)(11)')
console.log(primeFactors(7966684) === '(2**2)(11)(181061)')
console.log(primeFactors(7775460) === '(2**2)(3**3)(5)(7)(11**2)(17)')

// node "Primes in numbers"