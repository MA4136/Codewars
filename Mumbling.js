//      Mumbling

/*      Instructions
description: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
This time no story, no theory. The examples below show you how to write function

        Examples
accum('abcd') ==> 'A-Bb-Ccc-Dddd'
accum('RqaEzty') ==> 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'
accum('cwAt') ==> 'C-Ww-Aaa-Tttt'
*/

function accum(string) {
    return [...string].map((char, idx) => (char.toUpperCase() + char.toLowerCase().repeat(idx))).join('-')
}

console.log(accum('abcd'))
console.log(accum('RqaEzty'))
console.log(accum('cwAt'))

// node "Mumbling"