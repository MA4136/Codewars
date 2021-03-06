//      Reverse words

/*      Instructions
description: https://www.codewars.com/kata/5259b20d6021e9e14c0010d4
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

        Examples
reverseWords('tests  rule!  random  to  case') ==> 'stset  !elur  modnar  ot  esac'
reverseWords('always  to  Kata  rule!  tests  case') ==> 'syawla  ot  ataK  !elur  stset  esac'
reverseWords('tests rule! is hardocoded case Kata random') ==> 'stset !elur si dedocodrah esac ataK modnar'
*/

function reverseWords(str) {
    return str.split(' ').map(el => el.split('').reverse().join('')).join(' ')
}

console.log(reverseWords('tests  rule!  random  to  case'))
console.log(reverseWords('always  to  Kata  rule!  tests  case'))
console.log(reverseWords('tests rule! is hardocoded case Kata random'))

// node "Reverse words"