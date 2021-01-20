//      Largest 5 digit number in a series
//      www.codewars.com

/*      Instructions
In the following 10 digit number: 1234567890, 67890 is the greatest sequence of 5 consecutive digits.

Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given.
The number will be passed in as a string of only digits. It should return a five digit integer.
The number passed may be as large as 1000 digits.

        Examples
largestDick(1234567890) ==> 67890
largestDick(1234567898765) ==> 98765
*/

function largestDick(digits) {
    return Math.max(...Array.from(String(digits), (el, idx) => Number([...String(digits)].slice(idx, idx + 5).join(""))))
}

console.log(largestDick(1234567890))
console.log(largestDick(1234567898765))

// node "Largest 5 digit number in a series"

// Excellent!