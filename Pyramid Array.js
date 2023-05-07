//      Pyramid Array

/*      Instructions
description: https://www.codewars.com/kata/515f51d438015969f7000013
Write a function that when given a number >= 0, returns an Array of ascending length subarrays.
Note: the subarrays should be filled with 1s

        Examples
pyramid(0) ==> [ ]
pyramid(1) ==> [ [1] ]
pyramid(2) ==> [ [1], [1, 1] ]
pyramid(3) ==> [ [1], [1, 1], [1, 1, 1] ]
*/

function pyramid(num) {
  if (num < 0) throw new Error('The number must be greater than zero')

  const result = []

  for (let i = 1; i <= num; i++) {
    result.push(new Array(i).fill(1))
  }

  return result
}

console.log(pyramid(0))
console.log(pyramid(1))
console.log(pyramid(2))
console.log(pyramid(3))
console.log(pyramid(-3))
