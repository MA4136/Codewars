//      Find the smallest

/*      Instructions
description: https://www.codewars.com/kata/573992c724fc289553000e95
You have a positive number n consisting of digits. You can do at most one operation: Choosing the index of a digit in the number,
remove this digit at that index and insert it back to another or at the same place in the number in order to find the smallest number you can get.

Return an array or a tuple or a string depending on the language (see "Sample Tests") with:
1)the smallest number you got
2)the index i of the digit d you took, i as small as possible
3)the index j (as small as possible) where you insert this digit d to have the smallest number.

        Examples
smallest(261235) ==> [126235, 2, 0]
smallest(209917) ==> [29917, 0, 1]
smallest(285365) ==> [238565, 3, 1]
smallest(269045) ==> [26945, 3, 0]
smallest(296837) ==> [239687, 4, 1]
smallest(111111111) ==> [111111111, 0, 0]
*/

function smallest(number) {
    let smallest = number
    let indexFrom = 0
    let indexTo = 0
    const array = Array.from(String(number), (el) => Number(el))

    for (let n = 0; n < array.length; ++n) {
        for (let m = 0; m < array.length; ++m) {
            let arrCopy = [...array]
            arrCopy.splice(n, 1)
            arrCopy.splice(m, 0, array[n])
            let min = Number(arrCopy.join(''))

            if (smallest > min) {
                smallest = min
                indexFrom = n
                indexTo = m
            }
        }
    }
    return [smallest, indexFrom, indexTo]
}

console.log(smallest(261235), [126235, 2, 0])
console.log(smallest(209917), [29917, 0, 1])
console.log(smallest(285365), [238565, 3, 1])
console.log(smallest(269045), [26945, 3, 0])
console.log(smallest(296837), [239687, 4, 1])
console.log(smallest(111111111), [111111111, 0, 0])

// node "Find the smallest"