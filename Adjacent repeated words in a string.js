//      Adjacent repeated words in a string

/*      Instructions
description: https://www.codewars.com/kata/5245a9138ca049e9a10007b8

        Examples
countAdjacentPairs('') ==> 0
countAdjacentPairs('pineapple apple') ==> 0
countAdjacentPairs('banana banana banana') ==> 1
countAdjacentPairs('orange Orange kiwi pineapple apple') ==> 1
countAdjacentPairs('banana banana banana terracotta banana terracotta terracotta pie!') ==> 2

*/

// #1
function countAdjacentPairs(string) {
    const regExp = new RegExp(/\b(\w+)\b(\s\b\1\b)+/, 'gi')
    const result = string.match(regExp)
    return result && result.length || 0
}

// #2
function countAdjacentPairs(string) {
    return string.split(' ')
        .map(el => el.toLowerCase())
        .reduce((acc, curr, _, array) => acc.includes(curr) ? acc : array.indexOf(curr) === array.lastIndexOf(curr) ? acc : acc.concat(curr), [])
        .length
}

console.log(countAdjacentPairs(''))
console.log(countAdjacentPairs('pineapple apple'))
console.log(countAdjacentPairs('banana banana banana'))
console.log(countAdjacentPairs('orange Orange kiwi pineapple apple'))
console.log(countAdjacentPairs('banana banana banana terracotta banana terracotta terracotta pie!'))

// node "Adjacent repeated words in a string"