//      Break camelCase

/*      Instructions
description: https://www.codewars.com/kata/59cfc000aeb2844d16000075
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below.

        Examples
solution('camelCasing') ==> 'camel Casing'
solution('camelCasingTest') ==> 'camel Casing Test'
*/

function solution(string) {
    return string.replace(/([a-z])([A-Z])/g, '$1 $2')
}

console.log(solution('camelCasing'))
console.log(solution('camelCasingTest'))

// node "Break camelCase"