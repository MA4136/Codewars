//      Array.diff
//      www.codewars.com

/*      Instructions
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b.
If a value is present in b, all of its occurrences must be removed from the other.

        Examples
arrayDiff([1,2,2,2,3], [2]) ==> [1,3]
arrayDiff([3,4], [3]) ==> [4]
arrayDiff([1,8,2], []) ==> [1,8,2]
*/

function arrayDiff(a, b) {
    return a.filter(el => !b.includes(el))
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2]))
console.log(arrayDiff([3, 4], [3]))
console.log(arrayDiff([1, 8, 2], []))

// node "Array.diff"

// Respect. You are part of the community core. Your rank signifies focus and disciplined talent.
// Continue making great strides and contributing to the discussion with your voice and insight.