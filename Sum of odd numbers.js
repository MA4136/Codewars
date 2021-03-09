//      Sum of odd numbers

/*      Instructions
description: https://www.codewars.com/kata/55fd2d567d94ac3bc9000064
Given the triangle of consecutive odd numbers:
             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29 ...
Calculate the row sums of this triangle from the row index (starting at index 1):

        Examples
rowSumOddNumbers(1)  ==> 1
rowSumOddNumbers(2)  ==> 8 (3 + 5)
rowSumOddNumbers(42) ==> 74088
*/

function rowSumOddNumbers(n) {
    return Math.pow(n, 3)
}

console.log(rowSumOddNumbers(1))
console.log(rowSumOddNumbers(2))
console.log(rowSumOddNumbers(42))

// node "Sum of odd numbers"