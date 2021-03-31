//      Simple sum of pairs

/*      Instructions
description: https://www.codewars.com/kata/5bc027fccd4ec86c840000b7

        Examples
solve(18) ==> 18
solve(29) ==> 11
solve(45) ==> 18
solve(1140) ==> 33
solve(7019) ==> 35
*/

function solve(n) {
    const nines = '9'.repeat(String(n).length - 1)
    const diff = n - nines
    return [...nines + diff].reduce((acc, curr) => acc + Number(curr), 0)
}

console.log(solve(18))
console.log(solve(29))
console.log(solve(45))
console.log(solve(1140))
console.log(solve(7019))

// node "Simple sum of pairs"