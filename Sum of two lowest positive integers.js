//      Sum of two lowest positive integers
//      www.codewars.com

/*  Instructions
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
No floats or non-positive integers will be passed.

    Examples
[19, 5, 42, 2, 77] ==> 7
[10, 343445353, 3453445, 3453545353453] ==> 3453455
*/

function sumTwoSmallestNumbers(numbers) {
    return numbers.sort((a, b) => a - b).slice(0, 2).reduce((a, b) => a + b, 0)
}

// Excellent!
// You have passed all of the tests! :)
