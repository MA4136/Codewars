//      Even or Odd - Which is Greater

/*      Instructions
description: https://www.codewars.com/kata/57f7b8271e3d9283300000b4
Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all
the indiviudal odd digits. Always a string of numbers will be given.

If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"
If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"
If the total of both even and odd numbers are identical return: "Even and Odd are the same"

        Examples
evenOrOdd('12') ==> 'Even is greater than Odd')
evenOrOdd('123') ==> 'Odd is greater than Even')
evenOrOdd('112') ==> 'Even and Odd are the same')
*/

function evenOrOdd(string) {
    const even = [...string].filter(el => !(el % 2)).reduce((n, m) => Number(n) + Number(m), 0)
    const odd = [...string].filter(el => el % 2).reduce((n, m) => Number(n) + Number(m), 0)
    switch (true) {
        case even > odd:
            return 'Even is greater than Odd'
        case odd > even:
            return 'Odd is greater than Even'
        default:
            return 'Even and Odd are the same'
    }
}

console.log(evenOrOdd('12'), 'Even is greater than Odd')
console.log(evenOrOdd('123'), 'Odd is greater than Even')
console.log(evenOrOdd('112'), 'Even and Odd are the same')

// node "Even or Odd - Which is Greater"