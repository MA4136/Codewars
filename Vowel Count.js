//      Vowel Count
//      www.codewars.com

/*  Instructions
Return the number (count) of vowels in the given string.
We will consider "a, e, i, o, u" as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.

    Examples
"abracadabra"                           ==  5
"my pyx"                                ==  0
"o a kak ushakov lil vo kashu kakao"    ==  13
*/

function getCount(str) {
    const vowels = 'aeiou'
    return  str.toLowerCase().split('').filter(item => vowels.includes(item)).length
}

// You have passed all of the tests! :)