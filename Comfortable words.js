//      Comfortable words

/*      Instructions
description: https://www.codewars.com/kata/56684677dc75e3de2500002b
A comfortable word is a word which you can type always alternating the hand you type with.
That being said, complete the function which receives a word and returns true if it's a comfortable word and false otherwise.
The word will always be a string consisting of only ascii letters from a to z.

        Examples
comfortable_word('yams') ==> true
comfortable_word('test') ==> false
*/

function comfortable_word(word) {
    const regExp = new RegExp(/\w{2}|\s{2}/)
    return !regExp.test(word.replace(/[yuiophjklnm]/g, ' '))
}

console.log(comfortable_word('yams'))
console.log(comfortable_word('test'))
console.log(comfortable_word('leisure'))
console.log(comfortable_word('qmyqxp'))

// node "Comfortable words"