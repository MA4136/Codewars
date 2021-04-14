//      All Star Code Challenge #15

/*      Instructions
description: codewars.com/kata/586560a639c5ab3a260000f3

        Examples
rotate(Hello) ==> ['elloH', 'lloHe', 'loHel', 'oHell', 'Hello']
rotate('testing') ==> ['estingt',  'stingte',  'tingtes',  'ingtest',  'ngtesti',  'gtestin',  'testing']
*/

function rotate(str) {
    return Array.from({length: ++str.length}, (_, idx) => str.slice(idx) + str.slice(0, idx)).slice(1)
}

console.log(rotate('Hello'))
console.log(rotate('testing'))

// node "All Star Code Challenge #15"