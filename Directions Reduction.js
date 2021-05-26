//      Directions Reduction

/*      Instructions
description: https://www.codewars.com/kata/550f22f4d758534c1100025a

        Examples
dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST']) ==> []
dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']) ==> ['WEST']
dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST']) ==> ['NORTH', 'WEST', 'SOUTH', 'EAST']
*/

// #1
function dirReduc(arr) {
    let str = arr.join('')
    const regExp = new RegExp(/northsouth|southnorth|eastwest|westeast/, 'gi')
    str = str.replace(regExp, '')
    return str.match(regExp) ? dirReduc([str]) : str.match(/(north|south|east|west)/gi) || []
}

// #2
function dirReduc(arr) {
    return arr.reduce((acc, curr) => acc[acc.length - 1] === {
        NORTH: `SOUTH`,
        SOUTH: `NORTH`,
        EAST: `WEST`,
        WEST: `EAST`
    }[curr] ? acc.slice(0, -1) : [...acc, curr], [])
}

console.log(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST']))
console.log(dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']))
console.log(dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST']))

// node "Directions Reduction"