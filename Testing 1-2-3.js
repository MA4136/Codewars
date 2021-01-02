//      Testing 1-2-3
//      www.codewars.com

/*  Instructions
Write a function which takes a list of strings and returns each line prepended by the correct number.
The numbering starts at 1. The format is n: string. Notice the colon and space in between.

    Examples
number([]) ==> []
number(["a", "b", "c"]) ==> ["1: a", "2: b", "3: c"]
number([ '', '', '', '', '' ]) ==> ['1: ', '2: ', '3: ', '4: ', '5: ']
*/

function number(array) {
    return array.map((el, idx) => `${idx + 1}: ${el}`)
}

// console.log(number([]))
// console.log(number(["a", "b", "c"]))
// console.log(number(['', '', '', '', '']))

// node "Testing 1-2-3"

// Excellent!
// You have passed all of the tests! :)