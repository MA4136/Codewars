//      Hamming Distance

/*      Instructions
description: https://www.codewars.com/kata/5410c0e6a0e736cf5b000e69
The Hamming Distance is a measure of similarity between two strings of equal length.
Complete the function so that it returns the number of positions where the input strings do not match.
You can assume that the two input strings are of equal length.

        Examples
hamming('espresso', 'Expresso') ==> 2)
hamming('Hello World', 'Hello World') ==> 0)
hamming('hello world', 'hello tokyo') ==> 4)
hamming('I like turtles', 'I like turkeys') ==> 3)
hamming('hamming and cheese', 'Hamming and Cheese') ==> 2)
hamming('a man a plan a canal', 'a man a plan sobanal') ==> 3)
hamming('old father, old artificer', 'of my soul the uncreated ') ==> 24)
*/

function hamming(str1, str2) {
    if (str1 === str2) return 0
    let counter = 0
    for (let idx in str1) {
        if (str1[idx] !== str2[idx]) {
            counter++
        }
    }
    return counter
}

console.log(hamming('espresso', 'Expresso'), 2)
console.log(hamming('Hello World', 'Hello World'), 0)
console.log(hamming('hello world', 'hello tokyo'), 4)
console.log(hamming('I like turtles', 'I like turkeys'), 3)
console.log(hamming('hamming and cheese', 'Hamming and Cheese'), 2)
console.log(hamming('a man a plan a canal', 'a man a plan sobanal'), 3)
console.log(hamming('old father, old artificer', 'of my soul the uncreated '), 24)

// node "Hamming Distance"
// https://en.wikipedia.org/wiki/Hamming_distance