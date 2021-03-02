//      Simple Encryption #1 - Alternating Split
//      www.codewars.com

/*      Instructions
description: https://www.codewars.com/kata/57814d79a56c88e3e0000786
Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
Do this n times!

        Examples
encrypt('This is a test!', 0) ==> 'This is a test!'
encrypt('This is a test!', 1) ==> 'hsi  etTi sats!'
encrypt('This is a test!', 3) ==> ' Tah itse sits!'
encrypt('This is a test!', -1) ==> 'This is a test!'
*/

function encrypt(text, n) {
    if (!n || n < 0) return text
    let string = [...text].filter((el, idx) => Boolean(idx % 2)).join('') +
                 [...text].filter((el, idx) => !Boolean(idx % 2)).join('')
    return n > 1 ? encrypt(string, (n - 1)) : string
}

console.log(encrypt('This is a test!', 0))
console.log(encrypt('This is a test!', 1))
console.log(encrypt('This is a test!', 3))
console.log(encrypt('This is a test!', -1))

// node "Simple Encryption #1 - Alternating Split"