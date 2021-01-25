//      Duplicate Encoder
//      www.codewars.com

/*      Instructions
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that
character appears only once in the original string, or ")" if that character appears more than once in the original string.
Ignore capitalization when determining if a character is a duplicate.

        Examples
duplicateEncode("din") ==> "((("
duplicateEncode("(( @") ==> "))(("
duplicateEncode("OOOOOOvOOOOlbdOP") ==> "))))))())))((()("
*/

function duplicateEncode(word) {
    return word.toLowerCase().split("")
        .map((el, _, word) => word.indexOf(el) === word.lastIndexOf(el) ? "(" : ")").join("")
}

console.log(duplicateEncode("din"))
console.log(duplicateEncode("(( @"))
console.log(duplicateEncode("OOOOOOvOOOOlbdOP"))

// node "Duplicate Encoder"

// Excellent!