//      Split In Parts

/*      Instructions
description: https://www.codewars.com/kata/5650ab06d11d675371000003
The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method).

        Example
splitInParts('supercalifragilisticexpialidocious', 3) ==> 'sup erc ali fra gil ist ice xpi ali doc iou s'
splitInParts('HelloKata', 1) ==> 'H e l l o K a t a'
splitInParts('HelloKata', 9) ==> 'HelloKata'
*/

function splitInParts(string, partLength) {
    return string.split('').map((el, idx) => (idx + 1) % partLength ? el : `${el} `).join('').trim()
}

function splitInParts(string, partLength) {
    return string.match(new RegExp(`.{1,${partLength}}`, 'g')).join(' ')
}

console.log(splitInParts('supercalifragilisticexpialidocious', 3))
console.log(splitInParts('HelloKata', 1))
console.log(splitInParts('HelloKata', 9))

// node "Split In Parts"