//      Find the missing letter
//      www.codewars.com

/*      Instructions
full description is available here: https://www.codewars.com/kata/5839edaa6754d6fec10000a2
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

        Examples
findMissingLetter(['a','b','c','d','f']) ==> 'e')
findMissingLetter(['O','Q','R','S']) ==> 'P')
*/

function findMissingLetter(array) {
    const arr = array.map((_, idx) => array.join('').charCodeAt(idx))
    return String.fromCharCode(arr.find((el, idx) => el + 1 !== arr[idx + 1]) + 1)
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']))
console.log(findMissingLetter(['O', 'Q', 'R', 'S']))

// node "Find the missing letter"