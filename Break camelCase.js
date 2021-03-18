//      Break camelCase

/*      Instructions
description: https://www.codewars.com/kata/5208f99aee097e6552000148
Complete the solution so that the function will break up camel casing, using a space between words.

        Examples
solution('camelCasing') ==> 'camel Casing'
solution('camelCasingTest') ==> 'camel Casing Test'
*/

function solution(string) {
    return string.replace(/([A-Z])/g, ' $1')
}

console.log(solution('camelCasing'))
console.log(solution('camelCasingTest'))

// node "Break camelCase"