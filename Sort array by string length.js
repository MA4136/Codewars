//      Sort array by string length
//      www.codewars.com

/*  Instructions
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings,
ordered from shortest to longest.

    Example
["Telescopes", "Glasses", "Eyes", "Monocles"] ==> ["Eyes", "Glasses", "Monocles", "Telescopes"]
*/

function sortByLength (array) {
    return array.sort((a, b) => a.length - b.length)
}

// You have passed all of the tests! :)