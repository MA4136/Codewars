//      Best travel

/*      Instructions
description: https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa

        Examples
ls = [50, 55, 56, 57, 58]
chooseBestSum(163, 3, ls) ==> 163
ls = [50]
chooseBestSum(163, 3, ls) ==> null
ls = [91, 74, 73, 85, 73, 81, 87]
chooseBestSum(230, 3, ls) ==> 228
*/

function chooseBestSum(distance, towns, scope) {
    return scope
        .reduce((acc, curr) => [...acc, ...acc.filter(el => el.length < towns).map(el => [...el, curr])], [[]])
        .filter(el => el.length === towns)
        .map(el => el.reduce((acc, curr) => acc + curr))
        .filter(el => el <= distance)
        .sort((n, m) => n - m).pop() || null
}

let ls = [50, 55, 56, 57, 58]
console.log(chooseBestSum(163, 3, ls))

ls = [50]
console.log(chooseBestSum(163, 3, ls))

ls = [91, 74, 73, 85, 73, 81, 87]
console.log(chooseBestSum(230, 3, ls))

// node "Best travel"