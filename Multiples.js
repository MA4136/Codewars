//      Multiples!

/*      Instructions
description: https://www.codewars.com/kata/55a8a36703fe4c45ed00005b
Make a program that takes a value (x) and returns 'Bang' if the number is divisible by 3, 'Boom' if it is divisible by 5,
'BangBoom' if it divisible by 3 and 5, and 'Miss' if it isn't divisible by any of them. 
Note: Your program should only return one value

        Examples
multiple(3) ==> 'Bang'
multiple(15) ==> 'BangBoom'
multiple(23) ==> 'Miss'
multiple(30) ==> 'BangBoom'
multiple(65) ==> 'Boom'
multiple(98) ==> 'Miss'
*/

function multiple(number) {
    return number % 5 ? number % 3 ? 'Miss' : 'Bang' : number % 3 ? 'Boom' : 'BangBoom'
}

console.log(multiple(3), 'Bang')
console.log(multiple(15), 'BangBoom')
console.log(multiple(23), 'Miss')
console.log(multiple(30), 'BangBoom')
console.log(multiple(65), 'Boom')
console.log(multiple(98), 'Miss')

// node "Multiples"