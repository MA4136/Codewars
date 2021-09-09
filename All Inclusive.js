//      All Inclusive?

/*      Instructions
description: https://www.codewars.com/kata/5700c9acc1555755be00027e
Output of function containAllRots: a boolean true if all rotations of string are included in array

        Examples
containAllRots("", []) ==> true
containAllRots("", ["bsjq", "qbsj"]) ==> true
containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) ==> true
containAllRots("XjYABhR", ["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"]) ==> false
*/

function containAllRots(string, array) {
    if (!string || Number(string)) return true
    return array.map(el => [...el.toLowerCase()].sort().join('') === [...string.toLowerCase()].sort().join(''))
        .filter(Boolean).length === string.length
}

console.log(containAllRots('', []), true)
console.log(containAllRots('', ['bsjq', 'qbsj']), true)
console.log(containAllRots('bsjq', ['bsjq', 'qbsj', 'sjqb', 'twZNsslC', 'jqbs']), true)
console.log(containAllRots('12341234', ['DIeF', 'IeFD', '12341234', '41234123', '34123412', '23412341']))
console.log(containAllRots('XjYABhR', ['TzYxlgfnhf', 'yqVAuoLjMLy', 'BhRXjYA', 'YABhRXj', 'hRXjYAB', 'jYABhRX', 'XjYABhR', 'ABhRXjY']), false)

// node "All Inclusive"