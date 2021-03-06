//      Maximum Length Difference

/*      Instructions
description: https://www.codewars.com/kata/5663f5305102699bad000056
You are given two arrays a1 and a2 of strings. Let x be any string in the first array and y be any string in the second array.
Find max(abs(length(x) − length(y))).

        Example
a1 = ['hoqq', 'bbllkw', 'oox', 'ejjuyyy', 'plmiis', 'xxxzgpsssa', 'xxwwkktt', 'znnnnfqknaz', 'qqquuhii', 'dvvvwz']
a2 = ['cccooommaaqqoxii', 'gggqaffhhh', 'tttoowwwmmww']
mxdiflg(a1, a2) ==> 13
*/

function mxdiflg(a1, a2) {
    return a1.length && a2.length ? Math.max(...a1.map(A => Math.max(...a2.map(B => Math.abs(B.length - A.length))))) : -1
}

console.log(mxdiflg(['hoqq', 'bbllkw', 'oox', 'ejjuyyy', 'plmiis', 'xxxzgpsssa', 'xxwwkktt', 'znnnnfqknaz', 'qqquuhii', 'dvvvwz'],
    ['cccooommaaqqoxii', 'gggqaffhhh', 'tttoowwwmmww']))

// node "Maximum Length Difference"