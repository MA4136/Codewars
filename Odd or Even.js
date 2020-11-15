//      Odd or Even
//      www.codewars.com

/*  Instructions
Given a list of numbers, determine whether the sum of its elements is odd or even.
Give your answer as a string matching "odd" or "even".
If the input array is empty consider it as: [0] (array with a zero).

    Examples
odd_or_even([0])          ==  "even"
odd_or_even([0, 1, 4])    ==  "odd"
odd_or_even([0, -1, -5])  ==  "even"
*/

function oddOrEven(array) {
    return array.reduce((first, second) => first + second, 0) % 2 === 0 ? "even" : "odd"
}

// You have passed all of the tests! :)