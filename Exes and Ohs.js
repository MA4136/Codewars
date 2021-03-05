//      Exes and Ohs

/*      Instructions
description: https://www.codewars.com/kata/55908aad6620c066bc00002a
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive.

        Examples
XO('ooxx') ==> true
XO('xooxx') ==> false
XO('zpzpzpp') ==> true // when no 'x' and 'o' is present should return true
*/

function XO(str) {
    str = [...str.toLowerCase()]
    return str.filter(el => el === 'o').length === str.filter(el => el === 'x').length
}

console.log(XO('ooxx'))
console.log(XO('xooxx'))
console.log(XO('zpzpzpp'))

// node "Exes and Ohs"