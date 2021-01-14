//      Categorize New Member
//      www.codewars.com

/*      Instructions
The Western Suburbs Croquet Club has two categories of membership, Senior and Open.
To be a senior, a member must be at least 55 years old and have a handicap greater than 7.
In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

        Examples
[[45, 12],[55,21],[19, -2],[104, 20]] ==> ['Open', 'Senior', 'Open', 'Senior']
[[3, 12],[55,1],[91, -2],[54, 23]] ==> ['Open', 'Open', 'Open', 'Open']
*/

function openOrSenior(data) {
    return data.map(el => el[0] >= 55 && el[1] > 7 ? "Senior" : "Open")
}

console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]))
console.log(openOrSenior([[3, 12], [55, 1], [91, -2], [54, 23]]))

// node "Categorize New Member"

// Correct!