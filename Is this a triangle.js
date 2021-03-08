//      Is this a triangle?

/*      Instructions
description: https://www.codewars.com/kata/56606694ec01347ce800001b
Implement a method that accepts 3 integer values a, b, c.
The method should return true if a triangle can be built with the sides of given length and false in any other case.
(In this case, all triangles must have surface greater than 0 to be accepted).

        Examples
isTriangle(1,2,2) ==> true
isTriangle(7,2,2) ==> false
*/

function isTriangle(a, b, c) {
    return (a + b + c) - Math.max(a, b, c) > Math.max(a, b, c)
}

console.log(isTriangle(1,2,2))
console.log(isTriangle(7,2,2))

// node "Is this a triangle"