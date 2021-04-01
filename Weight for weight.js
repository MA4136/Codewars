//      Weight for weight

/*      Instructions
description: https://www.codewars.com/kata/55c6126177c9441a570000cc

        Examples
orderWeight('103 123 4444 99 2000') ==> '2000 103 123 4444 99'
orderWeight('56 65 74 100 99 68 86 180 90') ==> '100 180 90 56 65 74 68 86 99'
orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123') ==> '11 11 2000 10003 22 123 1234000 44444444 9999'
*/

//  #1
function orderWeight(string) {
    const array = string.split(' ')
    return array
        .map((el, idx) => [el.split('').reduce((acc, curr) => acc + Number(curr), 0), idx])
        .sort((n, m) => n[0] - m[0])
        .map(el => array[el[1]])
        .join(' ')
}

//  #2
function orderWeight(string) {
    function sum(num) {
        return num.split('').reduce((acc, curr) => acc + Number(curr), 0)

    }

    return string.split(' ')
        .sort()
        .sort((n, m) => sum(n) - sum(m) || n > m || -(n < m))
        .join(' ')
}

console.log(orderWeight('103 123 4444 99 2000'))
console.log(orderWeight('56 65 74 100 99 68 86 180 90'))
console.log(orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123'))

// node "Weight for weight"