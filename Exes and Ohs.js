//      Exes and Ohs
//      www.codewars.com

/*  Instructions
Check to see if a string has the same amount of 'x's and 'o's.
The method must return a boolean and be case insensitive. The string can contain any char.

    Examples
XO("ooxx")    ==> true
XO("xooxx")   ==> false
XO("ooxXm")   ==> true
XO("zpzpzpp") ==> true // when no 'x' and 'o' is present should return true
XO("zzoo")    ==> false
*/

function XO(str) {
    return  Array.from(str.toLowerCase()).filter(el => el === "o").length ===
            Array.from(str.toLowerCase()).filter(el => el === "x").length
}

// You have passed all of the tests! :)