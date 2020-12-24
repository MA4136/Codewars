//      Sum of the first nth term of Series
//      www.codewars.com

/*  Instructions
Your task is to write a function which returns the sum of following series upto nth term(parameter).
Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

You need to round the answer to 2 decimal places and return it as String.
If the given value is 0 then it should return 0.00
You will only be given Natural Numbers as arguments.

    Examples
seriesSum(1) ==> "1.00"
seriesSum(2) ==> "1.25"
seriesSum(3) ==> "1.39"
seriesSum(4) ==> "1.49"
*/

function seriesSum(n) {
    let result = 0
    for (let counter = 0; counter < n; counter++) {
        result += 1 / (1 + counter * 3)
    }
    return result.toFixed(2)
}

// console.log(seriesSum(1))
// console.log(seriesSum(2))
// console.log(seriesSum(3))
// console.log(seriesSum(4))

// node "Sum of the first nth term of Series"

// Outstanding!
// You have passed all of the tests! :)