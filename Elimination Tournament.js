//      Elimination Tournament

/*      Instructions
description: https://www.codewars.com/kata/5f631ed489e0e101a70c70a0

        Examples
input = [9, 5, 4, 7, 6, 3, 8]
tourney(input) ==> [
                    [9, 5, 4, 7, 6, 3, 8],
                    [8, 9, 7, 6],           // 8 is now first because it was last in the former round
                    [9, 7],
                    [9]
                   ]
*/

function tourney(array) {
    if (array.length < 2) return [array]
    let result = array.length % 2 ? array.slice(-1) : []

    for (let idx = 0; idx < array.length - 1; idx += 2) {
        result.push(Math.max(array[idx], array[idx + 1]))
    }

    return [array].concat(tourney(result))
}

console.log(tourney([9, 5, 4, 7, 6, 3, 8, 2]))
console.log(tourney([9, 5, 4, 7, 6, 3, 8]))

// node "Elimination Tournament"