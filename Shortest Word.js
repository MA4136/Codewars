//      Shortest Word

/*      Instructions
description: https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
Simple, given a string of words, return the length of the shortest word(s).

        Examples
findShort('bitcoin take over the world maybe who knows perhaps') ==> 3
findShort('Steem Waves Waves Factom MadeSafeCoin') ==> 5
findShort('Ripple Bitcoin') ==> 6
*/

function findShort(str) {
    return Math.min(...str.split(' ').map(item => item.length))
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'))
console.log(findShort('Steem Waves Waves Factom MadeSafeCoin'))
console.log(findShort('Ripple Bitcoin'))

// node "Shortest Word"