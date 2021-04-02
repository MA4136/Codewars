//      Where my anagrams at?

/*      Instructions
description: https://www.codewars.com/kata/523a86aa4230ebb5420001e1

        Examples
anagrams('laser', ['lazing', 'lazy',  'lacer']) ==> []
anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) ==> ['aabb', 'bbaa']
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) ==> ['carer', 'racer']
*/

function anagrams(word, words) {
    return words.filter(el => String([...el].sort()) === String([...word].sort()))
}

console.log(anagrams('laser', ['lazing', 'lazy', 'lacer']))
console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))

// node "Where my anagrams at"