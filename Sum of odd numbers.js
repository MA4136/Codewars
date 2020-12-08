//      Sum of odd numbers
//      www.codewars.com

/*  Instructions
Given the triangle of consecutive odd numbers:
             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29 ...
Calculate the row sums of this triangle from the row index (starting at index 1):

    Examples
rowSumOddNumbers(1); ==> 1
rowSumOddNumbers(2); ==> 8 (3 + 5)
*/

function rowSumOddNumbers(n) {
    let start = n ** 2 - (n - 1)
    let result = 0
    let count = 0

    while (count < n) {
        if (start % 2 !== 0) {
            result += start
            count++
        }
        start++
    }
    return result
}


// You have passed all of the tests! :)
