//      Largest 5 digit number in a series

/*      Instructions
description: https://www.codewars.com/kata/51675d17e0c1bed195000001
In the following 10 digit number: 1234567890, 67890 is the greatest sequence of 5 consecutive digits.
Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given.
The number will be passed in as a string of only digits. It should return a five digit integer.

        Examples
largestDick(1234567890) ==> 67890
largestDick(1234567898765) ==> 98765
*/

function largestDick(digits) {
    return Math.max(...Array.from(String(digits), (el, idx) => Number([...String(digits)].slice(idx, idx + 5).join(''))))
}

function largestDick(digits){
    digits = String(digits)
    return [...digits].reduce((acc, _, idx) => Math.max(acc, digits.slice(idx, idx + 5)))
}

console.log(largestDick(1234567890))
console.log(largestDick(1234567898765))

// node "Largest 5 digit number in a series"