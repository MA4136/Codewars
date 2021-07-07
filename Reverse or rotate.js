//      Reverse or rotate?

/*      Instructions
description: https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991

        Examples
revrot("", 8) ==> ""
revrot("123456779", 0) ==> ""
revrot("66443875", 4) ==> "44668753"
revrot("66443875", 8) ==> "64438756"
revrot("664438769", 8) ==> "67834466"
revrot("123456779", 8) ==> "23456771"
revrot("123456987654", 6) ==> "234561876549"
revrot("123456987653", 6) ==> "234561356789"
revrot("563000655734469485", 4) ==> "0365065073456944"
*/

function revrot(str, sz) {
    function cubeSum(arg) {
        return arg.split('').reduce((acc, curr) => Math.pow(curr, 3), 0) % 2 === 0
    }

    function reverse(arg) {
        return arg.split('').reverse().join('')
    }

    function rotate(arg) {
        return arg.slice(1) + arg.slice(0, 1)
    }

    return (str.match(new RegExp('.{' + sz + '}', 'g')) || [])
        .map(el => cubeSum(el) ? reverse(el) : rotate(el))
        .join('')
}

console.log(revrot('', 8))
console.log(revrot('123456779', 0))
console.log(revrot('66443875', 4))
console.log(revrot('66443875', 8))
console.log(revrot('664438769', 8))
console.log(revrot('123456779', 8))
console.log(revrot('123456987654', 6))
console.log(revrot('123456987653', 6))
console.log(revrot('563000655734469485', 4))

// node "Reverse or rotate"