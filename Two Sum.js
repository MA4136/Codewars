//      Two Sum

/*      Instructions
description: https://www.codewars.com/kata/52c31f8e6605bcc646000082
Write a function that takes an array of numbers and a target number. It should find two different items in the array that,
when added together, give the target value. The indices of these items should then be returned in a array like so: (index1, index2).

        Examples
twoSum([2,2,3], 4) ==> [0,1]
twoSum([1,2,3], 4) ==> [0,2]
twoSum([1234,5678,9012], 14690) ==> [1,2]
*/

function twoSum(numbers, target) {
    for (let n = 0; n < numbers.length - 1; n++) {
        for (let m = n + 1; m < numbers.length; m++) {
            if (numbers[n] + numbers[m] === target) {
                return [n, m]
            }
        }
    }
}

console.log(twoSum([2, 2, 3], 4))
console.log(twoSum([1, 2, 3], 4))
console.log(twoSum([1234, 5678, 9012], 14690))

// node "Two Sum"