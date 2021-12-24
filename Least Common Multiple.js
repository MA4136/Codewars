//      Least Common Multiple

/*      Instructions
description: https://www.codewars.com/kata/5259acb16021e9d8a60010af
Write a function that calculates the least common multiple of its arguments; each argument is assumed to be a non-negative integer.
In the case that there are no arguments (or the provided array in compiled languages is empty), return 1.

        Examples
lcm(9) ==> 9
lcm(2, 5) ==> 10
lcm(2, 3, 4) ==> 12
*/

// #1
// STDERR - Execution Timed Out (12000 ms)
function lcm(...args) {
    let max = Math.max(...args)
    while (true) {
        if (args.every(el => max % el === 0)) {
            return max
        } else max++
    }
}

// #2
function lcm(...args) {
    let max = args[0]
    for (let n = 1; n < args.length; n++) {
        let curr = args[n]
        let acc = max
        while (max && curr) {
            max > curr ? max %= curr : curr %= max
        }
        max = acc * args[n] / (max + curr)
    }
    return max
}

// #3
function gcd(...numbers) {
    return numbers.reduce((a, b) => b === 0 ? a : gcd(b, a % b))
}

function lcm(...numbers) {
    return numbers.reduce((a, b) => Math.abs(a * b) / gcd(a, b))
}

console.log(lcm(9))
console.log(lcm(2, 5))
console.log(lcm(2, 3, 4))

// node "Least Common Multiple"