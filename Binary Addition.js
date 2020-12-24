//      Binary Addition
//      www.codewars.com

/*  Instructions
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
The binary number returned should be a string.

    Examples
addBinary(1, 2) ==> "11"
addBinary(51, 12) ==> "111111"
addBinary(892249938749302, 235943808244016) ==> "100000000100001011000010011100001110000000010100110"
addBinary(694514372801158, 683345970083403) ==> "100111001010010100000011100010010011010100011010001"
*/

function addBinary(a, b) {
    return (a + b).toString(2)
}

// console.log(addBinary(51, 12) === "111111")
// console.log(addBinary(892249938749302, 235943808244016) === "100000000100001011000010011100001110000000010100110")
// console.log(addBinary(694514372801158, 683345970083403) === "100111001010010100000011100010010011010100011010001")

// node "Binary Addition"

// Outstanding!
// You have passed all of the tests! :)