//      Valid Braces
//      www.codewars.com

/*      Instructions
description: https://www.codewars.com/kata/5277c8a221e209d3f6000b56
Write a function that takes a string of braces, and determines if the order of the braces is valid.

        Examples
validBraces( "()" ) ==> true
validBraces( "[(])" ) ==> false
*/

function validBraces(braces) {
    const regExp = new RegExp(/\{\}|\[\]|\(\)/)//  {} or [] or ()
    return regExp.test(braces) ? validBraces(braces.replace(regExp, '')) : '' === braces
}

console.log(validBraces("()"))
console.log(validBraces("[(])"))

// node "Valid Braces"