//      Beginner Series #3 Sum of Numbers
//      www.codewars.com

/*  Instructions
Given two integers a and b, which can be positive or negative, find the sum of all the integers
between including them too and return it. If the two numbers are equal return a or b.
Note: a and b are not ordered!

    Examples
getSum(1, 2) == 3   // 1 + 2 = 3
getSum(0, 1) == 1   // 0 + 1 = 1
getSum(1, 1) == 1   // 1 Since both are same
getSum(-1, 0) == -1 // -1 + 0 = -1
getSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
*/

    function getSum(a, b) {
        let result = 0
        for (let k = Math.min(a, b); k < Math.max(a, b)+1; k++) {
            result += k
        }
        return result
    }

// Correctamundo!
// You have passed all of the tests! :)