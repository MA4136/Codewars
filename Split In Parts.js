//      Split In Parts
//      www.codewars.com

/*  Instructions
The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method).
String length is always greater than 0. String has no spaces. Size is always positive.

    Example
splitInParts("supercalifragilisticexpialidocious", 3) ==> "sup erc ali fra gil ist ice xpi ali doc iou s"
splitInParts("HelloKata", 1) ==> "H e l l o K a t a"
splitInParts("HelloKata", 9) ==> "HelloKata"
*/

function splitInParts(string, partLength) {
    return string.split("").map((el, idx) => (idx + 1) % partLength ? el : `${el} `).join("").trim()
}

// Correctamundo!
// You have passed all of the tests! :)
