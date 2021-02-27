//      CamelCase Method
//      www.codewars.com

/*      Instructions
description: https://www.codewars.com/kata/587731fda577b3d1b0001196
Build Tower by the following given argument: number of floors (integer and always greater than 0).
Tower block is represented as *

        Examples
"camel case method".camelCase() ==> "CamelCaseMethod"
"say hello ".camelCase() ==> "SayHello"
" camel case word".camelCase() ==> "CamelCaseWord"
"".camelCase() ==> ""
*/

String.prototype.camelCase = function () {
    const regExp = new RegExp(/^.|\s./, 'g')
    return this ? this.trim().replace(regExp, (result) => result.toUpperCase().trim()) : ''
}

console.log('test case'.camelCase(), 'TestCase')
console.log('camel case method'.camelCase(), 'CamelCaseMethod')
console.log('say hello '.camelCase(), 'SayHello')
console.log(' camel case word'.camelCase(), 'CamelCaseWord')
console.log(''.camelCase(), '')

// node "CamelCase Method"
// 500+ Honor: You now have the ability to moderate comments marked as having spoilers.