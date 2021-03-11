//      Unique In Order

/*      Instructions
description: https://www.codewars.com/kata/54e6533c92449cc251001667
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value
next to each other and preserving the original order of elements.

        Examples
uniqueInOrder([1,2,2,3,3]) ==> [1, 2, 3]
uniqueInOrder('ABBCcAD') ==> ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder('AAAABBBCCDAABBB') ==> ['A', 'B', 'C', 'D', 'A', 'B']
*/

function uniqueInOrder(iterable) {
    return [...iterable].filter((el, idx) => el !== iterable[idx - 1])
}

console.log(uniqueInOrder([1, 2, 2, 3, 3]))
console.log(uniqueInOrder('ABBCcAD'))
console.log(uniqueInOrder('AAAABBBCCDAABBB'))

// node "Unique In Order"

// 300+ Honor: You now have the ability to author your own kata!