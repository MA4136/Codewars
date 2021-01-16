//      Disemvowel Trolls
//      www.codewars.com

/*      Instructions
Your task is to write a function that takes a string and return a new string with all vowels removed.
Note: for this kata "y" isn't considered a vowel.

        Example
disemvowel(`This website is for losers LOL!`) ==> "Ths wbst s fr lsrs LL!"
*/

function disemvowel(str) {
    return str.match(/[^aeiou]/gim).join("")
}

console.log(disemvowel(`This website is for losers LOL!`))

// node "Disemvowel Trolls"

// Correctamundo!