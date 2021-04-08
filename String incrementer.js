//      String incrementer

/*      Instructions
description: https://www.codewars.com/kata/54a91a4883a7de5d7800009c
Write a function which increments a string, to create a new string.
If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.

        Examples
incrementString('') ==> '1'
incrementString('foo') ==> 'foo1'
incrementString('foobar99') ==> 'foobar100'
incrementString('foobar099') ==> 'foobar100'
incrementString('foobar000') ==> 'foobar001'
incrementString('foobar001') ==> 'foobar002'
*/

function incrementString(string) {
    const regExp = new RegExp(/(0*)([0-9]+$)/)

    return string.match(regExp) ? string.replace(regExp, (_, zeros, num) => {
        let incr = Number(num) + 1
        return String(incr).length > num.length ? zeros.slice(0, -1) + incr : zeros + incr
    }) : string + 1
}

console.log(incrementString(''))
console.log(incrementString('foo'))
console.log(incrementString('foobar99'))
console.log(incrementString('foobar099'))
console.log(incrementString('foobar000'))
console.log(incrementString('foobar001'))

// node "String incrementer"