//      Sort the odd
//      www.codewars.com

/*      Instructions
full description is available here: https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
You will be given an array of numbers.
You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

        Examples
sortArray([5, 3, 2, 8, 1, 4]) ==> [1, 3, 2, 8, 5, 4]
sortArray([5, 3, 1, 8, 0]) ==> [1, 3, 5, 8, 0]
sortArray([]) ==> []
*/

function sortArray(array) {
    const odd = array.filter(el => el % 2 !== 0).sort((a, b) => a - b)
    return array.map(el => el % 2 ? odd.shift() : el)
}

console.log(sortArray([5, 3, 2, 8, 1, 4]))
console.log(sortArray([5, 3, 1, 8, 0]))
console.log(sortArray([]))

// node "Sort the odd"