//      Shortest Word
//      www.codewars.com

/*  Instructions
Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.

    Examples
"bitcoin take over the world maybe who knows perhaps" ==> 3
*/

function findShort(str) {
    return Math.min(...str.split(" ").map(item => item.length))
}

// You have passed all of the tests! :)