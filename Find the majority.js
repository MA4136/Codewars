//      Find the majority

/*      Instructions
description: https://www.codewars.com/kata/5af974846bf32304a2000e98
Given a list of elements [a1, a2, ..., an], with each ai being a string, write a function majority that returns the value that appears the most in the list.
If there's no winner, the function should return None, NULL, nil, etc, based on the programming language.

        Examples
majority(['A', 'B', 'A']) ==> 'A'
majority(['A', 'B', 'C']) ==> null
majority(['A', 'B', 'B', 'A']) ==> null
majority(['A','A','A','A']) ==> 'A'
majority(['A',]) ==> 'A'
majority(['A','A','A','BBBBBBBB']) ==> 'A'
majority(['A', 'B', 'C', 'C']) ==> 'C'
majority([]), null
majority(['B','C','','']) ==> '', 'Empty strings test!'
*/

function majority(array) {
    if (!array.length) return null

    let major = ''
    let values = {}
    let max = 0

    array.map(el => values[el] = values[el] + 1 || 1)

    for (let key in values) {
        if (values[key] > max) {
            max = values[key]
            major = key
        } else if (values[key] === max) {
            major = null
        }
    }

    return major
}

console.dir(majority(['A', 'B', 'A']), 'A')
console.dir(majority(['A', 'B', 'C']), null)
console.dir(majority(['A', 'B', 'B', 'A']), null)
console.dir(majority(['A', 'A', 'A', 'A']), 'A')
console.dir(majority(['A',]), 'A')
console.dir(majority(['A', 'A', 'A', 'BBBBBBBB']), 'A')
console.dir(majority(['A', 'B', 'C', 'C']), 'C')
console.dir(majority([]), null)
console.dir(majority(['B', 'C', '', '']), '', 'Empty strings test!')

// node "Find the majority"