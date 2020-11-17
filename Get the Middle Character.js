//      Get the Middle Character
//      www.codewars.com

/*  Instructions
You are going to be given a word. Your job is to return the middle character of the word.
If the word's length is odd, return the middle character.
If the word's length is even, return the middle 2 characters.

    Examples
"test"    => "es"
"testing" => "t"
"middle"  => "dd"
"A"       => "A"
*/

function getMiddle(string) {
    const half = string.length % 2
    return half ? string[Math.floor(string.length / 2)] : string[Math.floor(string.length / 2) - 1] + string[Math.floor(string.length / 2)]
}

// You have passed all of the tests! :)