//      WeIrD StRiNg CaSe
//      www.codewars.com

/*      Instructions
description: https://www.codewars.com/kata/52b757663a95b11b3d00062d

        Examples
toWeirdCase( "String" ) ==> "StRiNg"
toWeirdCase( "Weird string case" ) ==> "WeIrD StRiNg CaSe"
*/

function toWeirdCase(string) {
    return string.split(' ')
        .map(el => [...el].map((char, idx) => idx % 2 ? char.toLowerCase() : char.toUpperCase()).join(''))
        .join(' ')
}

console.log(toWeirdCase('String'))
console.log(toWeirdCase('Weird string case'))

// node "WeIrD StRiNg CaSe"