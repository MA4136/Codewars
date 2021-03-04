//      Find the divisors!

/*      Instructions
description: https://www.codewars.com/kata/544aed4c4a30184e960010f4
Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's
divisors(except for 1 and the number itself), from smallest to largest.

        Examples
divisors(12) ==> [2,3,4,6]
divisors(25) ==> [5]
divisors(13) ==> "13 is prime"
*/

function divisors(integer) {
    let array = []
    for (let n = 2; n < integer; n++) {
        if (integer % n === 0) {
            array.push(n)
        }
    }
    return array.length > 0 ? array : `${integer} is prime`
}

console.log(divisors(12))
console.log(divisors(25))
console.log(divisors(13))

// node "Find the divisors"