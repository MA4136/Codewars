//      Change it up

/*      Instructions
description: https://www.codewars.com/kata/58039f8efca342e4f0000023
Create a function that takes a string as a parameter and does the following, in this order:
-Replaces every letter with the letter following it in the alphabet (see note below)
-Makes any vowels capital
-Makes any consonants lower case

Note: the alphabet should wrap around, so Z becomes A

        Examples
changer('z') ==> 'A'
changer('dogs') ==> 'Epht'
changer('Cat30') ==> 'dbU30'
changer('Alice') ==> 'bmjdf'
changer('sponge1') ==> 'tqpOhf1'
changer('Hello World') ==> 'Ifmmp xpsmE'
*/

function changer(string) {
  const alphabet = /[a-z]/g
  const vovels = /[aeiou]/g

  return string.toLowerCase()
    .replace(alphabet, el => String.fromCharCode((el.charCodeAt() - 96) % 26 + 97))
    .replace(vovels, el => el.toUpperCase())
}

console.log(changer('z'), 'A')
console.log(changer('dogs'), 'Epht')
console.log(changer('Cat30'), 'dbU30')
console.log(changer('Alice'), 'bmjdf')
console.log(changer('sponge1'), 'tqpOhf1')
console.log(changer('Hello World'), 'Ifmmp xpsmE')

// node "Change it up"