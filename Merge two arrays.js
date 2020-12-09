//      Merge two arrays
//      www.codewars.com

/*  Instructions
Write a function that combines two arrays by alternatingly taking elements from each array in turn.
The arrays may be of different lengths, with at least one character/digit.
One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).

    Examples
[a, b, c, d, e], [1, 2, 3, 4, 5] ==>  [a, 1, b, 2, c, 3, d, 4, e, 5]
[1, 2, 3], [a, b, c, d, e, f]    ==>  [1, a, 2, b, 3, c, d, e, f]
*/

function mergeArrays(a, b) {
    let result = []
    for (let k = 0; k < Math.max(a.length, b.length); k++) {
        result.push(a[k], b[k])
    }
    return result.filter(el => el !== undefined)
}

// Outstanding!
// You have passed all of the tests! :)