//      Isograms
//      www.codewars.com

/*  Instructions
An isogram is a word that has no repeating letters, consecutive or non-consecutive.
Implement a function that determines whether a string that contains only letters is an isogram.
Assume the empty string is an isogram. Ignore letter case.

    Examples
isIsogram("Dermatoglyphics") ==> true
isIsogram("aba") ==> false
isIsogram("moOse") ==> false
*/

const isIsogram = (str) => {
    return new Set(str.toLowerCase()).size === str.length
}

// You have passed all of the tests! :)