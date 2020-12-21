//      Categorize New Member
//      www.codewars.com

/*  Instructions
The Western Suburbs Croquet Club has two categories of membership, Senior and Open.
They would like your help with an application form that will tell prospective members which category they will be placed.
To be a senior, a member must be at least 55 years old and have a handicap greater than 7.
In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

    Examples
[[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]] ==> ["Open", "Open", "Senior", "Open", "Open", "Senior"]
[[45, 12],[55,21],[19, -2],[104, 20]]                ==> ['Open', 'Senior', 'Open', 'Senior']
[[3, 12],[55,1],[91, -2],[54, 23]]                   ==> ['Open', 'Open', 'Open', 'Open']
[[59, 12],[55,-1],[12, -2],[12, 12]]                 ==> ['Senior', 'Open', 'Open', 'Open']
*/

function openOrSenior(data) {
    return data.map(el => el[0] >= 55 && el[1] > 7 ? "Senior" : "Open")
}

// console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))
// console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]))
// console.log(openOrSenior([[3, 12], [55, 1], [91, -2], [54, 23]]))
// console.log(openOrSenior([[59, 12], [55, -1], [12, -2], [12, 12]]))

// node "Categorize New Member"

// Correct!
// You have passed all of the tests! :)