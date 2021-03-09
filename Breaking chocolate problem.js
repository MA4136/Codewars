//      Breaking chocolate problem

/*      Instructions
description: https://www.codewars.com/kata/534ea96ebb17181947000ada
Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable.
Implement a function that will return minimum number of breaks needed. If input data is invalid you should return 0.

        Examples
breakChocolate(1, 1) ==> 0
breakChocolate(3, 1) ==> 2
breakChocolate(5, 5) ==> 24
*/

function breakChocolate(n, m) {
    return n * m > 0 ? (n * m) - 1 : 0
}

console.log(breakChocolate(1, 1))
console.log(breakChocolate(3, 1))
console.log(breakChocolate(5, 5))

// node "Breaking chocolate problem"