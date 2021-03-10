//      Credit Card Mask

/*      Instructions
description: https://www.codewars.com/kata/5412509bd436bd33920011bc
Your task is to write a function maskify, which changes all but the last four characters into '#'.

        Examples
maskify('4556364607935616') ==> '############5616'
maskify('1') ==> '1')
maskify('11111') ==> '#1111'
*/

function maskify(string) {
    return '#'.repeat(string.slice(0, -4).length) + string.slice(-4)
}

console.log(maskify('4556364607935616'))
console.log(maskify('1'))
console.log(maskify('11111'))

// node "Credit Card Mask"