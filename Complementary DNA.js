//      Complementary DNA
//      www.codewars.com

/*  Instructions
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development
and functioning of living organisms.

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA;
you need to get the other complementary side. DNA strand is never empty or there is no DNA at all.

    Examples
DNAStrand ("ATTGC") // return "TAACG"
DNAStrand ("GTAT") // return "CATA"
*/

function DNAStrand(dna) {
    return dna.split('').map(el => el === "A" ? "T" : el === "T" ? "A" : el === "C" ? "G" : "C").join('')
}

// Outstanding!
// You have passed all of the tests! :)