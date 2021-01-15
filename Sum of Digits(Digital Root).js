//      Sum of Digits(Digital Root)
//      www.codewars.com

/*      Instructions
Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until
a single-digit number is produced. The input will be a non-negative integer.

        Examples
digital_root(16)  ==> 7
digital_root(456) ==> 6
digital_root(493193) ==> 2
*/

function digital_root(n) {
    const result = Array.from([...String(n)], (el => parseInt(el))).reduce((a, b) => a + b, 0)
    return result > 9 ? digital_root(result) : result
}

console.log(digital_root(16))
console.log(digital_root(456))
console.log(digital_root(493193))

// node "Sum of Digits(Digital Root)"

// Impressive!