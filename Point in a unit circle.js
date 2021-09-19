//      Point in a unit circle

/*      Instructions
description: https://www.codewars.com/kata/58da7ae9b340a2440500009c
Write a function that returns true if a given point (x,y) is inside of a unit circle (that is, a "normal" circle
with a radius of one) centered at the origin (0,0) and returns false if the point is outside.
The region bounded by the circle is considered to be an open disk, so points on the boundary of the circle should return false.

        Examples
pointInCircle(0,0) ==> true
pointInCircle(2,0) ==> false
pointInCircle(0,0.9) ==> true
pointInCircle(0.5,0.5) ==> true
pointInCircle(1,0) ==> false
*/

function pointInCircle(x, y) {
    return Math.pow(x, 2) + Math.pow(y, 2) < 1
}

console.log(pointInCircle(0, 0), true)
console.log(pointInCircle(2, 0), false)
console.log(pointInCircle(0, 0.9), true)
console.log(pointInCircle(0.5, 0.5), true)
console.log(pointInCircle(1, 0), false)
console.log(pointInCircle(0.71, 0.71), false)

// node "Point in a unit circle"