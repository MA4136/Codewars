//      CamelCase Method

/*      Instructions
description: https://www.codewars.com/kata/587731fda577b3d1b0001196
Write simple .camelCase method for strings. All words must have their first letter capitalized without spaces.

        Examples
''.camelCase() ==> ''
'say hello '.camelCase() ==> 'SayHello'
' camel case word'.camelCase() ==> 'CamelCaseWord'
'camel case method'.camelCase() ==> 'CamelCaseMethod'
*/

// #1
String.prototype.camelCase = function () {
    const regExp = new RegExp(/^.|\s./, 'g')
    return this ? this.trim().replace(regExp, (result) => result.toUpperCase().trim()) : ''
}

// #2
String.prototype.camelCase = function () {
    return this.split(' ').map(el => el.slice(0, 1).toUpperCase() + el.slice(1)).join('')
}

console.log(''.camelCase(), '')
console.log('say hello '.camelCase(), 'SayHello')
console.log(' camel case word'.camelCase(), 'CamelCaseWord')
console.log('camel case method'.camelCase(), 'CamelCaseMethod')

// node "CamelCase Method"
// 500+ Honor: You now have the ability to moderate comments marked as having spoilers.