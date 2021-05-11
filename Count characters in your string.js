//      Count characters in your string

/*      Instructions
description: https://www.codewars.com/kata/52efefcbcdf57161d4000091
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
What if the string is empty? Then the result should be empty object literal, {}.

        Examples
count('') ==> {}
count('aba') ==> { a: 2, b: 1 }
*/

// #1
function count(string) {
    let result = {}
    string.split('').map(el => result[el] = result[el] + 1 || 1)
    return result
}

// #2
function count(string) {
    [ ...string ].reduce((pre, val) => (pre[val] = -~pre[val], pre), {})
}

console.log(count(''), {})
console.log(count('aba'), { a: 2, b: 1 })

// node "Count characters in your string"