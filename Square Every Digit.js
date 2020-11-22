//      Square Every Digit
//      www.codewars.com

/*  Instructions
Welcome.
In this kata, you are asked to square every digit of a number and concatenate them.
The function accepts an integer and returns an integer

    Examples
9119 ==> 811181
*/

function squareDigits(number) {
    return +[...String(number)].map(el => el ** 2).join("")
}

// You have passed all of the tests! :)