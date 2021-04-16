//      Rectangle into Squares

/*      Instructions
description: https://www.codewars.com/kata/55466989aeecab5aac00003e

        Examples
sqInRect(5, 5) ==> null
sqInRect(5, 3) ==> [3, 2, 1, 1]
sqInRect(3, 5) ==> [3, 2, 1, 1]
sqInRect(20, 14) ==> [14, 6, 6, 2, 2, 2]
*/

// #1
function sqInRect(lng, wdth) {
    if (lng === wdth) return null
    let result = []

    while (lng > 0 && wdth > 0) {
        result.push(lng > wdth ? wdth : lng)
        lng > wdth ? lng -= wdth : wdth -= lng
    }

    return result
}

console.log(sqInRect(5, 5))
console.log(sqInRect(5, 3))
console.log(sqInRect(3, 5))
console.log(sqInRect(20, 14))

// node "Rectangle into Squares"