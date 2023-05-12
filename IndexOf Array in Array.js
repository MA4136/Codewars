//      IndexOf Array in Array

/*      Instructions
description: https://www.codewars.com/kata/5783ef69202c0ee4cb000265
JavaScript's indexOf does not work with arrays as input. This is because [1,2] === [1,2] will return false in JavaScript.
Many other languages have similar quirks.

However, sometimes it is useful to search for an Array.
Write a function that looks for an array within a two-dimensional array and returns the index of the first matching element.
If there is no match, your function should return -1.

You will be required to validate the inputs on the following criteria:
    each element of the array to be searched should be an array;
    each sub-array in the two-dimensional array should be of length two;
    query should be an array of length two.
If the inputs are not valid you should throw an Error.

        Examples
searchArray([[1,2],[3,4],[5,6]], [1,2]) => 0
searchArray([[1,2],[3,4],[5,6]], [5,6]) => 2
searchArray([[1,2],[3,4],[5,6]], [9,2]) => -1
*/

function searchArray(arr, target) {
  if (!Array.isArray(target)) throw new Error('argument is non array')
  if (target.length !== 2) throw new Error('invalid length of argument')

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length !== 2) throw new Error('invalid length of argument')
    if (arr[i].toString() === target.toString()) {
      return i
    }
  }

  return -1
}

console.log(searchArray([[1, 2], [3, 4], [5, 6]], [1, 2]))
console.log(searchArray([[1, 2], [3, 4], [5, 6]], [5, 6]))
console.log(searchArray([[1, 2], [3, 4], [5, 6]], [9, 2]))
