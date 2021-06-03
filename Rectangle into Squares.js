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

// #2
function sqInRect(lng, wdth, flag = true) {
    if (lng === wdth) return flag ? null : [lng]
    const min = Math.min(lng, wdth)
    const max = Math.max(lng, wdth)

    return [min, ...sqInRect(max - min, min, false)]
}

// #3
function sqInRect(lng, wdth, recursive) {
    recursive = recursive === undefined ? false : recursive
    return lng === wdth && recursive === false ? null : lng === wdth ? [lng] : [Math.min(lng, wdth)].concat(sqInRect(Math.min(lng, wdth), Math.max(lng, wdth) - Math.min(lng, wdth), true))
}

console.log(sqInRect(5, 5))
console.log(sqInRect(5, 3))
console.log(sqInRect(3, 5))
console.log(sqInRect(20, 14))

// node "Rectangle into Squares"