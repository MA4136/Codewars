//      Alternate capitalization
//      www.codewars.com

/*      Instructions
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below.
Index 0 will be considered even.

        Examples
capitalize("abcdef") ==> ['AbCdEf', 'aBcDeF'])
capitalize("codewars") ==> ['CoDeWaRs', 'cOdEwArS'])
capitalize("abracadabra") ==> ['AbRaCaDaBrA', 'aBrAcAdAbRa'])
*/

function capitalize(string) {
    return Array([...string].map((el, idx) => idx % 2 === 0 ? el.toUpperCase() : el).join(""),
                 [...string].map((el, idx) => idx % 2 !== 0 ? el.toUpperCase() : el).join("")
    )}

console.log(capitalize("abcdef"))
console.log(capitalize("codewars"))
console.log(capitalize("abracadabra"))

// node "Alternate capitalization"

// Correctamundo!