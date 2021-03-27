// Valid Parentheses

/*      Instructions
description: https://www.codewars.com/kata/52774a314c2333f0a7000688
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid.
The function should return true if the string is valid, and false if it's invalid.

        Examples
validParentheses( '()' ) ==> true
validParentheses( '())' ) ==> false
validParentheses( ')(()))' ) ==> false
validParentheses( '(())((()())())' ) ==> true
*/

function validParentheses(parens) {
    if (parens.length % 2 || parens[0] === ')') return false // 20ms with / 22ms without
    const regExp = new RegExp(/\(\)/)
    return regExp.test(parens) ? validParentheses(parens.replace(regExp, '')) : '' === parens
}

console.log(validParentheses('()'))
console.log(validParentheses('())'))
console.log(validParentheses(')(()))'))
console.log(validParentheses('(())((()())())'))

// node "Valid Parentheses"