//      IP Validation

/*      Instructions
description: https://www.codewars.com/kata/515decfd9dcfc23bb6000006
Write an algorithm that will identify valid IPv4 addresses in dot-decimal format.
IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

        Examples
isValidIP("0.0.0.0") ==> true
isValidIP("12.255.56.1") ==> true
isValidIP("137.255.156.100") ==> true

isValidIP('.48.175.68') ==> false
isValidIP('12.34.56.-7') ==> false
isValidIP('078.108.74.56') ==> false
isValidIP('abc.def.ghi.jkl') ==> false
*/

function isValidIP(str) {
    return str.split('.')
        .filter(el =>
            el.length === String(Number(el)).length
            && Number(el) >= 0
            && Number(el) <= 255)
        .length === 4
}

console.log(isValidIP('0.0.0.0'))
console.log(isValidIP('12.255.56.1'))
console.log(isValidIP('137.255.156.100'))

console.log(isValidIP('.48.175.68'))
console.log(isValidIP('12.34.56.-7'))
console.log(isValidIP('078.108.74.56'))
console.log(isValidIP('abc.def.ghi.jkl'))

// node "IP Validation"