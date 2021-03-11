//      Find The Parity Outlier

/*      Instructions
description: https://www.codewars.com/kata/5526fc09a1bbd946250002dc
You are given an array (which will have a length of at least 3, but could be very large) containing integers.
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
Write a method that takes the array as an argument and returns this 'outlier' N.

        Examples
findOutlier([0,1,2]) ==> 1
findOutlier([1,1,0,1,1]) ==> 0
findOutlier([0,0,3,0,0]) ==> 3
*/

function findOutlier(integers) {
    return integers.filter(el => el % 2 === 0).length === 1 ? integers.find(el => el % 2 === 0) : integers.find(el => el % 2 !== 0)
}

console.log(findOutlier([0, 1, 2]))
console.log(findOutlier([1, 1, 0, 1, 1]))
console.log(findOutlier([0, 0, 3, 0, 0]))

// node "Find The Parity Outlier"