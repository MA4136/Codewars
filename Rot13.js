//       Rot13

/*      Instructions
description: https://www.codewars.com/kata/530e15517bc88ac656000716
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet.
ROT13 is an example of the Caesar cipher.

        Examples
rot13('test') ==> 'grfg'
rot13('Test') ==> 'Grfg'
*/

// #1
function rot13(message) {
    return message.replace(/[a-z]/gi, el => {
        return 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.charAt(
               'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'.indexOf(el))
    })
}

// #2
function rot13(message) {
    return message.replace(/[a-z]/gi, el => {
        return String.fromCharCode(el.charCodeAt(0) + (el.toUpperCase() <= 'M' ? 13 : -13))
    })
}

console.log(rot13('test'))
console.log(rot13('Test'))

// node "Rot13"