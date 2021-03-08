//      Printer Errors

/*      Instructions
description: https://www.codewars.com/kata/56541980fa08ab47a0000040

        Examples
printerError('aaabbbbhaijjjm') ==> '0/14'
printerError('aaaxbbbbyyhwawiwjjjwwm') ==> '8/22'
*/

function printerError(string) {
    return `${string.length - string.match(/[a-m]/g).length}/${string.length}`
}

console.log(printerError('aaabbbbhaijjjm'))
console.log(printerError('aaaxbbbbyyhwawiwjjjwwm'))

// node "Printer Errors"