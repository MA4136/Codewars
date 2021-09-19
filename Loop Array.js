//      Loop Array

/*      Instructions
description: https://www.codewars.com/kata/5fd8aa5743b49e0012d43e50
Write a function loopArr that loops array in a specified direction by some number of steps.
By "looping array" it means removing elements from start and adding them to end of array one-by-one (if direction is "left")
or removing from end and adding them to start one by-one (if direction is "right").

Function should accept three arguments:
array - non-empty array of elements of any type;
direction - 'left' or 'right' - tells how to loop array;
steps - number of steps to loop array (less or equal to array size);

        Examples
loopArr([1, 5, 87, 45, 8, 8], 'left', 2) ==> [87, 45, 8, 8, 1, 5]
loopArr([1, 5, 87, 45, 8, 8], 'right', 2) ==> [8, 8, 1, 5, 87, 45]
*/

// #1
function loopArr(arr, direction, steps) {
    return direction === 'left' ? arr.slice(steps).concat(arr.slice(0, steps)) : arr.slice(-steps).concat(arr.slice(0, -steps))
}

// #1.1
function loopArr(arr, direction, steps) {
    return direction === 'left' ? [...arr.slice(steps), ...arr.slice(0, steps)] : [...arr.slice(-steps), ...arr.slice(0, -steps)]
}

// #2
function loopArr(arr, direction, steps) {
    const count = direction == 'left' ? steps : -steps
    return [...arr.slice(count), ...arr.slice(0, count)]
}

console.log(loopArr([1, 5, 87, 45, 8, 8], 'left', 2), [87, 45, 8, 8, 1, 5])
console.log(loopArr([1, 5, 87, 45, 8, 8], 'right', 2), [8, 8, 1, 5, 87, 45])

// node "Loop Array"