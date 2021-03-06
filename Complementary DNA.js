//      Complementary DNA

/*      Instructions
description: https://www.codewars.com/kata/554e4a2f232cdd87d9000038
In DNA strings, symbols 'A' and 'T' are complements of each other, as 'C' and 'G'. You have function with one side of the DNA;
you need to get the other complementary side. DNA strand is never empty or there is no DNA at all.

        Examples
DNAStrand('AAAA') ==> 'TTTT'
DNAStrand('GTAT') ==> 'CATA'
DNAStrand('ATTGC') ==> 'TAACG'
*/

function DNAStrand(dna) {
    return dna.split('').map(el => el === 'A' ? 'T' : el === 'T' ? 'A' : el === 'C' ? 'G' : 'C').join('')
}

function DNAStrand(dna) {
    return [...dna].map(el => ({
        A: 'T',
        T: 'A',
        C: 'G',
        G: 'C'
    }[el])).join('')
}

console.log(DNAStrand('AAAA'))
console.log(DNAStrand('GTAT'))
console.log(DNAStrand('ATTGC'))

// node "Complementary DNA"