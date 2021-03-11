//      IQ Test

/*      Instructions
description: https://www.codewars.com/kata/552c028c030765286c00007d
The most frequent task in this test is to find out which one of the given numbers differs from the others in evenness.
Write a method that among the given numbers finds one that is different in evenness, and return a position of this number.

        Examples
iqTest("2 4 7 8 10") ==> 3
iqTest("1 2 1 1") ==> 2
iqTest("88 96 66 51 14 88 2 92 18 72 18 88 20 30 4 82 90 100 24 46") ==> 4
*/

function iqTest(numbers) {
    return numbers.split(" ")
        .findIndex((A, idx, array) => array.filter(B => B % 2 === A % 2).length === 1) + 1
}

console.log(iqTest("2 4 7 8 10"))
console.log(iqTest("1 2 1 1"))
console.log(iqTest("88 96 66 51 14 88 2 92 18 72 18 88 20 30 4 82 90 100 24 46"))

// node "IQ Test"