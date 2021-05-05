//      Two Joggers

/*      Instructions
description: https://www.codewars.com/kata/5274d9d3ebc3030802000165

        Examples
nbrOfLaps(5, 3) ==> [3,5]
nbrOfLaps(4, 6) ==> [3,2]
nbrOfLaps(5, 5) ==> [1,1]
*/

function nbrOfLaps(x, y) {
    let multiple = x
    while (multiple % y !== 0) {
        multiple += x
    }
    return [multiple / x, multiple / y]
}

console.log(nbrOfLaps(5, 3), [3, 5])
console.log(nbrOfLaps(4, 6), [3, 2])
console.log(nbrOfLaps(5, 5), [1, 1])

// node "Two Joggers"