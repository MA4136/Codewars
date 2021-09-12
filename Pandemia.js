//      Pandemia 🌡️

/*      Instructions
description: https://www.codewars.com/kata/5e2596a9ad937f002e510435
string = '01000000X000X011X0X'
'0' : uninfected
'1' : infected
'X' : ocean

        Examples
infected('01000000X000X011X0X') ==> 73.33333333333333
infected('01X000X010X011XX') ==> 72.72727272727273
infected('XXXXX') ==> 0
infected('0000000010') ==> 100
infected('X00X000000X10X0100') ==> 42.857142857142854
*/

function infected(string) {
    const infection = string.length - string.replace(/0*1+0*/g, '').length
    const total = string.length - string.replace(/[^X]/g, '').length
    return infection / total * 100 || 0
}

console.log(infected('01000000X000X011X0X'), 73.33333333333333)
console.log(infected('01X000X010X011XX'), 72.72727272727273)
console.log(infected('XXXXX'), 0)
console.log(infected('0000000010'), 100)
console.log(infected('X00X000000X10X0100'), 42.857142857142854)

// node "Pandemia"