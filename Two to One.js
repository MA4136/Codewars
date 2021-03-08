//      Two to One

/*      Instructions
description: https://www.codewars.com/kata/5656b6906de340bd1b0000ac
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,
each taken only once - coming from s1 or s2.

        Examples
longest('aretheyhere', 'yestheyarehere') ==> 'aehrsty'
longest('loopingisfunbutdangerous', 'lessdangerousthancoding') ==> 'abcdefghilnoprstu'
longest('inmanylanguages', 'theresapairoffunctions') ==> 'acefghilmnoprstuy'
*/

function longest(s1, s2) {
    return [...new Set(s1 + s2)].sort().join('')
}

console.log(longest('aretheyhere', 'yestheyarehere'))
console.log(longest('loopingisfunbutdangerous', 'lessdangerousthancoding'))
console.log(longest('inmanylanguages', 'theresapairoffunctions'))

// node "Two to One"