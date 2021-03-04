//      Vowel Count

/*      Instructions
description: https://www.codewars.com/kata/54ff3102c1bad923760001f3
Return the number (count) of vowels in the given string. We will consider 'a, e, i, o, u' as vowels for this Kata (but not y).

        Examples
getCount('abracadabra') ==> 5
getCount('my pyx') ==> 0
getCount('o a kak ushakov lil vo kashu kakao') ==> 13
*/

function getCount(str) {
    const vowels = 'aeiou'
    return [...str].filter(item => vowels.includes(item)).length
}

console.log(getCount('abracadabra'))
console.log(getCount('my pyx'))
console.log(getCount('o a kak ushakov lil vo kashu kakao'))

// node "Vowel Count"