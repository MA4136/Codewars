//      Disemvowel Trolls
//      www.codewars.com

/*  Instructions
Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls'
comments, neutralizing the threat.
Your task is to write a function that takes a string and
return a new string with all vowels removed.
Note: for this kata "y" isn't considered a vowel.

    Example
"This website is for losers LOL!" ==> "Ths wbst s fr lsrs LL!".
*/

function disemvowel(str) {
    return str.match(/[^aeiou]/gim).join("")
}

// Correctamundo!
// You have passed all of the tests! :)