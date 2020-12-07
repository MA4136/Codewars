//      Every possible sum of two digits
//      www.codewars.com

/*  Instructions
Given a long number, return all the possible sum of two digits of it.

    Examples
12345 ==> [ 3, 4, 5, 6, 5, 6, 7, 7, 8, 9 ]
all possible sum of two digits from that number are: [ 1 + 2, 1 + 3, 1 + 4, 1 + 5, 2 + 3, 2 + 4, 2 + 5, 3 + 4, 3 + 5, 4 + 5 ]
*/

function digits(num) {
    const array = String(num).split("").map(el => +el)
    const sum = []
    for (let idxFirst = 0; idxFirst < array.length; idxFirst++) {
        for (let idxSecond = idxFirst + 1; idxSecond < array.length; idxSecond++) {
            sum.push(array[idxFirst] + array[idxSecond])
        }
    }
    return sum
}

// Excellent!
// You have passed all of the tests! :)