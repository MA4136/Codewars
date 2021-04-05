//       Rot13

/*      Instructions
description: https://www.codewars.com/kata/530e15517bc88ac656000716
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet.
ROT13 is an example of the Caesar cipher.

        Examples
rot13('test') ==> 'grfg'
rot13('Test') ==> 'Grfg'
*/

function rot13(message) {
    return message.replace(/[a-z]/gi, el => {
        return 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.charAt(
               'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'.indexOf(el))
    })
}

console.log(rot13('test'))
console.log(rot13('Test'))

// node "Rot13"