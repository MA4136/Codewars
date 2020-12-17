//      Is this a triangle?
//      www.codewars.com

/*  Instructions
Implement a method that accepts 3 integer values a, b, c.
The method should return true if a triangle can be built with the sides of given length and false in any other case.
(In this case, all triangles must have surface greater than 0 to be accepted).

    Examples
5,5,5 ==> true
4,4,8 ==> true
*/

function isTriangle(a, b, c) {
    return (a + b + c) - Math.max(a, b, c) > Math.max(a, b, c)
}

// console.log(isTriangle(5, 5, 5))
// console.log(isTriangle(4, 4, 8))

// node "Is this a triangle"

// Outstanding!
// You have passed all of the tests! :)