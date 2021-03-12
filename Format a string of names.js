//      Format a string of names

/*      Instructions
description: https://www.codewars.com/kata/53368a47e38700bd8300030d
Given: an array containing hashes of names
Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

        Examples
list([]) ==> ''
list([ {name: 'Bart'} ]) ==> 'Bart'
list([ {name: 'Bart'}, {name: 'Lisa'} ]) ==> 'Bart & Lisa'
list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]) ==> 'Bart, Lisa & Maggie'
*/

function list(names) {
    const arr = Array.from(names, (el => el.name))
    const lastName = arr.pop()
    return [arr.join(', '), lastName].filter(Boolean).join(' & ')
}

console.log(list([]))
console.log(list([{name: 'Bart'}]))
console.log(list([{name: 'Bart'}, {name: 'Lisa'}]))
console.log(list([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}]))

// node "Format a string of names"