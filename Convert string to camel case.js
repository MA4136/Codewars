//      Convert string to camel case
//      www.codewars.com

/*      Instructions
description: https://www.codewars.com/kata/517abf86da9663f1d2000003
Complete the method/function so that it converts dash/underscore delimited words into camel casing.
The first word within the output should be capitalized only if the original word was capitalized.

        Examples
toCamelCase("the-stealth-warrior") ==> "theStealthWarrior"
toCamelCase("The_Stealth_Warrior") ==> returns "TheStealthWarrior"
*/

function toCamelCase(str) {
    const regExp = new RegExp(/[^a-z][a-z]/, 'gi')
    return str.replace(regExp, (result) => result[1].toUpperCase())
}

console.log(toCamelCase("the-stealth-warrior"))
console.log(toCamelCase("The_Stealth_Warrior"))

// node "Convert string to camel case"