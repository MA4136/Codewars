//      Categorize New Member

/*      Instructions
description: https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa
The Western Suburbs Croquet Club has two categories of membership, Senior and Open.
To be a senior, a member must be at least 55 years old and have a handicap greater than 7; handicaps range from -2 to +26.

        Examples
openOrSenior([[3, 12], [55, 1], [91, -2], [54, 23]]) ==> ['Open', 'Open', 'Open', 'Open']
openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]) ==> ['Open', 'Senior', 'Open', 'Senior']
*/

function openOrSenior(data) {
    return data.map(el => el[0] >= 55 && el[1] > 7 ? 'Senior' : 'Open')
}

console.log(openOrSenior([[3, 12], [55, 1], [91, -2], [54, 23]]))
console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]))

// node "Categorize New Member"