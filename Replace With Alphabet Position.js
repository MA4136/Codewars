//      Replace With Alphabet Position
//      www.codewars.com

/*      Instructions
In this kata you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.
"a" = 1, "b" = 2, etc.

        Examples
alphabetPosition("The sunset sets at twelve o' clock.") ==> "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
alphabetPosition("The narwhal bacons at midnight.") ==> "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"
*/

function alphabetPosition(text) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return Array.from(text.replace(/[^a-z]/gi, "").toLowerCase(), el => alphabet.indexOf(el) + 1).join(" ")
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))
console.log(alphabetPosition("The narwhal bacons at midnight."))
console.log(alphabetPosition("(=+| #}]"))


// node "Replace With Alphabet Position"

// Impressive!