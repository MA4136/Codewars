//      Words to sentence

/*      Instructions
description: https://www.codewars.com/kata/57a06005cf1fa5fbd5000216
Write function which will create a string from a list of strings, separated by space.

        Examples
wordsToSentence(['hello', 'world']) ==> 'hello world'
*/

function wordsToSentence(words) {
    return words.join(' ')
}

console.log(wordsToSentence(['hello', 'world']), 'hello world')

// node "Words to sentence"