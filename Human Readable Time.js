//      Human Readable Time

/*      Instructions
description: https://www.codewars.com/kata/52685f7382004e774f0001f7
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

        Examples
humanReadable(0) ==> '00:00:00'
humanReadable(5) ==> '00:00:05'
humanReadable(60) ==> '00:01:00'
humanReadable(86399) ==> '23:59:59'
humanReadable(359999) ==> '99:59:59'
*/

// #1
function humanReadable(seconds) {
    let HH = Math.trunc(seconds / 3600)
    let MM = Math.trunc((seconds % 3600) / 60)
    let SS = Math.trunc((seconds % 3600) % 60)

    function concatZero(value) {
        return String(value).length === 2 ? String(value) : '0' + String(value)
    }

    HH = concatZero(HH)
    MM = concatZero(MM)
    SS = concatZero(SS)

    return `${HH}:${MM}:${SS}`
}

// #2
function humanReadable(seconds) {
    return [(seconds / 3600) | 0, seconds % 3600 / 60, seconds % 3600 % 60].map(el => ('0' + ('' + el | 0)).substr(-2)).join(':')
}

// #3
function humanReadable(seconds) {
    return [seconds / 3600 ^ 0, seconds / 60 % 60 ^ 0, seconds % 60].map(el => `${el}`.padStart(2, `0`)).join(`:`)
}

console.log(humanReadable(0))
console.log(humanReadable(5))
console.log(humanReadable(60))
console.log(humanReadable(86399))
console.log(humanReadable(359999))

// node "Human Readable Time"