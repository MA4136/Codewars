//      Sort Numbers

/*      Instructions
description: https://www.codewars.com/kata/5174a4c0f2769dd8b1000003
Finish the solution so that it sorts the passed in array of numbers.
If the function passes in an empty array or null/nil value then it should return an empty array.

        Examples
sortNumbers([]) ==> []
sortNumbers(null) ==> []
sortNumbers([20, 2, 10]) ==> [2,10,20]
sortNumbers([2, 20, 10]) ==> [2,10,20]
sortNumbers([1,2,3,10,5]) ==> [1,2,3,5,10]
*/

function sortNumbers(nums) {
    return nums ? nums.sort((n, m) => n - m) : []
}

console.log(sortNumbers([]), [])
console.log(sortNumbers(null), [])
console.log(sortNumbers([20, 2, 10]), [2, 10, 20])
console.log(sortNumbers([2, 20, 10]), [2, 10, 20])
console.log(sortNumbers([1, 2, 3, 10, 5]), [1, 2, 3, 5, 10])

// node "Sort Numbers"