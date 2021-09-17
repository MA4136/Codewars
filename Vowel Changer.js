//      Vowel Changer

/*      Instructions
description: https://www.codewars.com/kata/597754ba62f8a19c98000030
Create a function that changes all the vowels (excluding y) in a string, and changes them all to the same vowel.
The first parameter of the function is the string, and the second is the vowel that all the vowels in the string are being changed to.

        Examples
vowelChange('adira wants to go to the park', 'o') ==> 'odoro wonts to go to tho pork'
vowelChange("hannah hannah bo-bannah banana fanna fo-fannah fee, fy, mo-mannah. hannah!",'i') ==> 'hinnih hinnih bi-binnih binini finni fi-finnih fii, fy, mi-minnih. hinnih!'
*/

function vowelChange(string, vowel) {
    return string.replace(/[aeiou]/g, vowel)
}

console.log(vowelChange('adira wants to go to the park', 'o'), 'odoro wonts to go to tho pork')
console.log(vowelChange('hannah hannah bo-bannah banana fanna fo-fannah fee, fy, mo-mannah. hannah!', 'i'), 'hinnih hinnih bi-binnih binini finni fi-finnih fii, fy, mi-minnih. hinnih!')

// node "Vowel Changer"

// 1000+ Honor: You now have 2x kata voting power!