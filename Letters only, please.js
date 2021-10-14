//      Letters only, please!

/*      Instructions
description: https://www.codewars.com/kata/59be6bdc4f98a8a9c700007d
Let's assume we need "clean" strings. Clean means a string should only contain letters a-z, A-Z and spaces.
We assume that there are no double spaces or line breaks.
Write a function that takes a string and returns a string without the unnecessary characters.

        Examples
removeChars('.tree1') ==> 'tree'
removeChars('my_list = ["a","b","c"]') ==> 'mylist  abc'
removeChars('1 + 1 = 2') ==> '    ' (string with 4 spaces)
removeChars('john.dope@dopington.com') ==> 'johndopedopingtoncom'
removeChars("that's a pie$ce o_f p#ie!") ==> 'thats a piece of pie'
removeChars("0123456789(.)+,|[]{}=@/~;^$'<>?-!*&:#%_") ==> '' (empty string)
*/

function removeChars(string) {
    return string.replace(/[^a-z\s]/gi, '')
}

console.log(removeChars('.tree1'))
console.log(removeChars('1 + 1 = 2'))
console.log(removeChars('my_list = ["a","b","c"]'))
console.log(removeChars('john.dope@dopington.com'))
console.log(removeChars('that\'s a pie$ce o_f p#ie!'))
console.log(removeChars('0123456789(.)+,|[]{}=@/~;^$\'<>?-!*&:#%_'))

// node "Letters only, please"