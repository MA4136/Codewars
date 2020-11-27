//      Find the middle element
//      www.codewars.com

/*  Instructions
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the
numerical element that lies between the other two elements.
The input to the function will be an array of three distinct numbers (Haskell: a tuple).

    Examples
gimme([2, 3, 1]) ==> 0
gimme([5, 10, 14]) ==> 1
*/

function gimme(array) {
    return array.findIndex(value => value == array.filter(numb => Math.min(...array) < numb && numb < Math.max(...array)))
}

// You have passed all of the tests! :)
