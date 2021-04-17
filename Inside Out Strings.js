//      Inside Out Strings

/*      Instructions
description: https://www.codewars.com/kata/57ebdf1c2d45a0ecd7002cd5

        Examples
insideOut('take me to semynak') ==> 'atek me to mesykan'
insideOut('man i need a taxi up to ubud') ==> 'man i ende a atix up to budu'
insideOut('what time are we climbing up the volcano') ==> 'hwta item are we milcgnib up the lovcona'
*/

function insideOut(string) {
    return string.split(' ').map(el => {
        let half = el.length / 2
        return el.length <= 3 ? el : el.length % 2 ?
            [...el.slice(0, half)].reverse().join('') + el[Math.trunc(half)] + [...el.slice(half + 1)].reverse().join('')
            :
            [...el.slice(0, half)].reverse().join('') + [...el.slice(half)].reverse().join('')
    }).join(' ')
}

console.log(insideOut('take me to semynak') === 'atek me to mesykan')
console.log(insideOut('man i need a taxi up to ubud') === 'man i ende a atix up to budu')
console.log(insideOut('what time are we climbing up the volcano') === 'hwta item are we milcgnib up the lovcona')

// node "Inside Out Strings"