//      The Office V - Find a Chair

/*      Instructions
description: https://www.codewars.com/kata/57f6051c3ff02f3b7300008b

        Examples

meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0) ==> 'Game On'
meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4) ==> [0, 1, 3]
meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5) ==> [0, 0, 1, 2, 2]
*/

function meeting(x, need) {
    let result = []
    if (!need) return 'Game On'
    for ([{length: chairs}, people] of x) {
        const take = Math.min(Math.max(people - chairs, 0), need)
        result.push(take)
        need -= take
        if (need <= 0) return result
    }
    return 'Not enough!'
}

console.log(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0))
console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4))
console.log(meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5))

// node "The Office V - Find a Chair"