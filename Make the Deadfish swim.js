//      Make the Deadfish swim

/*      Instructions
description: https://www.codewars.com/kata/51e0007c1f9378fa810002a9
Write a simple parser that will parse and run Deadfish.
Deadfish has 4 commands, each 1 character long:
i - increments the value (initially 0)
d - decrements the value
s - squares the value
o - outputs the value into the return array
Invalid characters should be ignored.

        Examples
parse("iiisdoso") ==> [8, 64]
parse("iiisxxxdoso") ==> [8, 64]
*/

function parse(string) {
    let result = []
    let num = 0
    for (let el of string) {
        switch (el) {
            case 'i' :
                num++
                break
            case 'd' :
                num--
                break
            case 's' :
                num **= 2
                break
            case 'o' :
                result.push(num)
                break
        }
    }
    return result
}

console.log(parse('iiisdoso'), [8, 64])
console.log(parse('iiisxxxdoso'), [8, 64])

// node "Make the Deadfish swim"