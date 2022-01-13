//      Factorial decomposition

/*      Instructions
description: https://www.codewars.com/kata/5a045fee46d843effa000070
The aim of the kata is to decompose n! (factorial n) into its prime factors.
Prime numbers should be in increasing order. When the exponent of a prime is 1 don't put the exponent.

-the function is decomp(n) and should return the decomposition of n! into its prime factors in increasing order of the primes, as a string.
-factorial can be a very big number (4000! has 12674 digits, n can go from 300 to 4000).
-In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace:
you can use dynamically allocated character strings.

        Examples
decomp(5) ==> '2^3 * 3 * 5'
decomp(14) ==> '2^11 * 3^5 * 5^2 * 7^2 * 11 * 13'
decomp(17) ==> '2^15 * 3^6 * 5^3 * 7^2 * 11 * 13 * 17'
decomp(22) ==> '2^19 * 3^9 * 5^4 * 7^3 * 11^2 * 13 * 17 * 19'
decomp(25) ==> '2^22 * 3^10 * 5^6 * 7^3 * 11^2 * 13 * 17 * 19 * 23'
*/

function decomp(num) {
    let primes = {}

    for (let n = 2; n <= num; n++) {
        for (let m = n, k = 2; m > 1; k++) {
            while (m % k === 0) {
                primes[k] = (primes[k] || 0) + 1
                m = m / k
            }
        }
    }

    return Object.keys(primes).map(el => {
            const factor = primes[el]
            return factor <= 1 ? el : el + '^' + factor
        }
    ).join(' * ')
}

console.log(decomp(5), '2^3 * 3 * 5')
console.log(decomp(14), '2^11 * 3^5 * 5^2 * 7^2 * 11 * 13')
console.log(decomp(17), '2^15 * 3^6 * 5^3 * 7^2 * 11 * 13 * 17')
console.log(decomp(22), '2^19 * 3^9 * 5^4 * 7^3 * 11^2 * 13 * 17 * 19')
console.log(decomp(25), '2^22 * 3^10 * 5^6 * 7^3 * 11^2 * 13 * 17 * 19 * 23')

// node "Factorial decomposition"