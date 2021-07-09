//      Steps in k-primes

/*      Instructions
description: https://www.codewars.com/kata/5a48948e145c46820b00002f

        Examples
kprimesStep(5, 20, 0, 50) => []
kprimesStep(2, 2, 0, 50) => [[4, 6], [33, 35]]
kprimesStep(6, 14, 2113665, 2113889) => [[2113722, 2113736]])
kprimesStep(2, 10, 0, 50) => [[4, 14], [15, 25], [25, 35], [39, 49]]
*/

function kprimesStep(k, step, start, nd) {
    function primeFactor(n) {
        let count = 0
        let m = 2
        while (m * m <= n) {
            while (n % m === 0) {
                count++
                n = n / m
            }
            m++
        }
        if (n > 1) count++
        return count === k
    }

    const result = []
    for (let m = start; m <= nd - step; m++)
        if (primeFactor(m) && primeFactor(m + step)) result.push([m, m + step])
    return result
}

console.log(kprimesStep(5, 20, 0, 50))
console.log(kprimesStep(2, 2, 0, 50))
console.log(kprimesStep(2, 10, 0, 50))
console.log(kprimesStep(6, 14, 2113665, 2113889))

// node "Steps in k-primes"