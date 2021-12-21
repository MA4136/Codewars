//      Compare powers

/*      Instructions
description: https://www.codewars.com/kata/55b2549a781b5336c0000103
You certainly can tell which is the larger number between 2**10 and 2**15.
But what about, say, 2**10 and 3**10? You know this one too.
Things tend to get a bit more complicated with both different bases and exponents: which is larger between 3**9 and 5**6?
Well, by now you have surely guessed that you have to build a function to compare powers, returning -1 if the first member is larger, 0 if they are equal, 1 otherwise

        Examples
comparePowers([2, 10], [2, 15]) === 1
comparePowers([2, 10], [3, 10]) === 1
comparePowers([2, 10], [2, 10]) === 0
comparePowers([3, 9], [5, 6]) === -1
comparePowers([7, 7], [5, 8]) === -1
*/

function comparePowers(n1, n2) {
    let [num1, pow1] = n1,
        [num2, pow2] = n2
    return Math.sign(num2 - num1 ** (pow1 / pow2))
}

console.log(comparePowers([2, 10], [2, 15]) === 1)
console.log(comparePowers([2, 10], [3, 10]) === 1)
console.log(comparePowers([2, 10], [2, 10]) === 0)
console.log(comparePowers([3, 9], [5, 6]) === -1)
console.log(comparePowers([7, 7], [5, 8]) === -1)

// node "Compare powers"