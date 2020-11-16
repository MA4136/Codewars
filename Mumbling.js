//      Mumbling
//      www.codewars.com

/*  Instructions
This time no story, no theory. The examples below show you how to write function

    Examples
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/

function accum(string) {
    let result = []
    for (let n = 0; n < string.length; n++) {
        result.push(string[n].toUpperCase() + string[n].repeat(n).toLowerCase())
    }
    return result.join('-')
}

// You have passed all of the tests! :)