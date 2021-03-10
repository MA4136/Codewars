//      Alternate capitalization

/*      Instructions
description: https://www.codewars.com/kata/59cfc000aeb2844d16000075
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below.

        Examples
capitalize('abcdef') ==> ['AbCdEf', 'aBcDeF'])
capitalize('codewars') ==> ['CoDeWaRs', 'cOdEwArS'])
capitalize('abracadabra') ==> ['AbRaCaDaBrA', 'aBrAcAdAbRa'])
*/

function capitalize(string) {
    return Array([...string].map((el, idx) => idx % 2 === 0 ? el.toUpperCase() : el).join(''),
                 [...string].map((el, idx) => idx % 2 !== 0 ? el.toUpperCase() : el).join('')
    )}

console.log(capitalize('abcdef'))
console.log(capitalize('codewars'))
console.log(capitalize('abracadabra'))

// node "Alternate capitalization"