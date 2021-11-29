//      Sum of angles

/*      Instructions
description: https://www.codewars.com/kata/5a03b3f6a1c9040084001765
Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

        Examples
angle(3) ==> 180
angle(4) ==> 360
angle(5) ==> 540
*/

function angle(n) {
    return 180 * (n - 2)
}

console.log(angle(3))
console.log(angle(4))
console.log(angle(5))

// node "Sum of angles"