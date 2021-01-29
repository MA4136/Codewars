//      Unique In Order
//      www.codewars.com

/*      Instructions
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without
any elements with the same value next to each other and preserving the original order of elements.

        Examples
uniqueInOrder('AAAABBBCCDAABBB') ==> ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         ==> ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       ==> [1, 2, 3]
*/

function uniqueInOrder(iterable) {
    return [...iterable].filter((el, idx) => el !== iterable[idx - 1])
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder('ABBCcAD'))
console.log(uniqueInOrder([1, 2, 2, 3, 3]))

// node "Unique In Order"

// Impressive!
// 300+ Honor: You now have the ability to author your own kata!