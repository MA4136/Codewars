//      Equal Sides Of An Array
//      www.codewars.com

/*      Instructions
full description: https://www.codewars.com/kata/5679aa472b8f57fb8c000047
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of
the integers to the left of N is equal to the sum of the integers to the right of N.
If there is no index that would make this happen, return -1.

        Examples
findEvenIndex([1,2,3,4,3,2,1]) ==> 3
findEvenIndex([1,100,50,-51,1,1]) ==> 1
findEvenIndex([1,2,3,4,5,6]) ==> -1
*/

function findEvenIndex(arr) {
    return arr.findIndex((_, idx) =>
        arr.slice(0, idx).reduce((n, m) => n + m, 0) === arr.slice(idx + 1).reduce((n, m) => n + m, 0))
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]))
console.log(findEvenIndex([1,100,50,-51,1,1]))
console.log(findEvenIndex([1,2,3,4,5,6]))

// node "Equal Sides Of An Array"