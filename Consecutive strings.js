//      Consecutive strings
//      www.codewars.com

/*      Instructions
full description is available here: https://www.codewars.com/kata/56a5d994ac971f1ac500003e
You are given an array(list) strarr of strings and an integer k.
Your task is to return the first longest string consisting of k consecutive strings taken in the array.

        Examples
longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) ==> "abigailtheta"
longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) ==> "ixoyx3452zzzzzzzzzzzz"
longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) ==> ""
longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) ==> ""
*/

function longestConsec(strarr, k) {
    if (strarr.length === 0 || k > strarr.length || k <= 0) return ''
    const str = strarr.map((_, idx) => strarr.slice(idx, k + idx).join(''))
    return str.find(el => el.length === Math.max(...str.map(A => A.length)))
}

console.log(longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu")
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2))
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3))
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15))
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0))

// node "Consecutive strings"