//      Persistent Bugger
//      www.codewars.com

/*      Instructions
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
which is the number of times you must multiply the digits in num until you reach a single digit.

        Examples
persistence(39) ==> 3
persistence(999) ==> 4
persistence(4) ==> 0
*/

function persistence(num) {
    return String(num).length > 1 ? persistence([...String(num)].reduce((a, b) => a * b, 1)) + 1 : 0
}

console.log(persistence(39))
console.log(persistence(999))
console.log(persistence(4))

// node "Persistent Bugger"

// Outstanding!