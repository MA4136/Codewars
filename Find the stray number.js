//      Find the stray number
//      www.codewars.com

/*      Instructions
You are given an odd-length array of integers, in which all of them are the same, except for one single number.
Complete the method which accepts such an array, and returns that single different number.
The input array will always be valid! (odd-length >= 3)

        Examples
stray([1, 1, 2]) ==> 2
stray([17, 17, 3, 17, 17, 17, 17]) ==> 3
*/

function stray(numbers) {
    return Number(numbers.filter((el, _, array) => el !== array[1]))
}

console.log(stray([1, 1, 2]))
console.log(stray([17, 17, 3, 17, 17, 17, 17]))

// node "Find the stray number"

// Correct!