//      Roman Numerals Encoder
//      www.codewars.com

/*      Instructions
description: https://www.codewars.com/kata/51b62bf6a9c58071c600001b
Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

        Examples
solution(1990) ==> 'MCMXC'
solution(2007) ==> 'MMVII'
solution(2008) ==> 'MMVIII'
*/

function solution(number) {
    return 'I'.repeat(number)
        .replace(/IIIII/g, 'V')
        .replace(/VV/g, 'X')
        .replace(/XXXXX/g, 'L')
        .replace(/LL/g, 'C')
        .replace(/CCCCC/g, 'D')
        .replace(/DD/g, 'M')
        .replace(/VIIII/g, 'IX')
        .replace(/LXXXX/g, 'XC')
        .replace(/XXXX/g, 'XL')
        .replace(/DCCCC/g, 'CM')
        .replace(/CCCC/g, 'CD')
        .replace(/IIII/g, 'IV')
}

console.log(solution(1990))
console.log(solution(2007))
console.log(solution(2008))

// node "Roman Numerals Encoder"