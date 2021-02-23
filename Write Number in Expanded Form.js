//      Write Number in Expanded Form
//      www.codewars.com

/*      Instructions
description: https://www.codewars.com/kata/5842df8ccbd22792a4000245
You will be given a number and you will need to return it as a string in Expanded Form.

        Examples
expandedForm(12) ==> '10 + 2'
expandedForm(42) ==> 40 + 2'
expandedForm(70304) ==> '70000 + 300 + 4'
*/

function expandedForm(num) {
    return [...String(num)]
        .map((el, idx, array) => el + '0'.repeat((array.length - idx) - 1))
        .filter(el => Number(el) ? el : '')
        .join(' + ')
}

console.log(expandedForm(12))
console.log(expandedForm(42))
console.log(expandedForm(70304))

// node "Write Number in Expanded Form"