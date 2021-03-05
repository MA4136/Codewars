//      Highest and Lowest

/*      Instructions
description: https://www.codewars.com/kata/554b4ac871d6813a03000035
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

        Examples
highAndLow('1 2 3 4 5') ==> '5 1'
highAndLow('1 2 -3 4 5') ==> '5 -3'
highAndLow('1 9 3 4 -5') ==> '9 -5'
*/

function highAndLow(str) {
    return Math.max(...str.split(' ')) + ' ' + Math.min(...str.split(' '))
}

console.log(highAndLow('1 2 3 4 5'))
console.log(highAndLow('1 2 -3 4 5'))
console.log(highAndLow('1 9 3 4 -5'))

// node "Highest and Lowest"