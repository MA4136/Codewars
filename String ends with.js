//      String ends with?

/*      Instructions
description: https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

        Examples
solution('abc', 'bc') ==> true
solution('abc', 'd') ==> false
*/

function solution(str, ending) {
    return str.endsWith(ending)
}

console.log(solution('abc', 'bc'))
console.log(solution('abc', 'd'))

// node "String ends with"