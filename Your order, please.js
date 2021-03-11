//      Your order, please

/*      Instructions
description: https://www.codewars.com/kata/55c45be3b2079eccff00010f
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

        Examples
order('') ==> '')
order('is2 Thi1s T4est 3a') ==> Thi1s is2 3a T4est'
order('4of Fo1r pe6ople g3ood th5e the2') ==> 'Fo1r the2 g3ood 4of th5e pe6ople'
*/

function order(words) {
    return words.split(' ').sort((a, b) => a.match(/\d/) - b.match(/\d/)).join(' ')
}

console.log(order(''))
console.log(order('is2 Thi1s T4est 3a'))
console.log(order('4of Fo1r pe6ople g3ood th5e the2'))

// node "Your order, please"