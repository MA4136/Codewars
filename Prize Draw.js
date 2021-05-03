//      Prize Draw

/*      Instructions
description: https://www.codewars.com/kata/5616868c81a0f281e500005c

        Examples
rank('Lagon,Lily', [1, 5], 2) ==> 'Lagon'
rank('', [4, 2, 1, 4, 3, 1, 2], 6) ==> 'No participants'
rank('Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin', [4, 2, 1, 4, 3, 1, 2], 4) ==> 'Benjamin'
rank('Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin', [4, 2, 1, 4, 3, 1, 2], 8) ==> 'Not enough participants'
*/

// #1
function rank(names, weights, n) {
    return !names ? 'No participants' : names.split(',').length < n ? 'Not enough participants' :
        names.split(',')
            .map((el, idx) => [el, weights[idx] * [...el.toLowerCase()].reduce((n, m) => n + m.charCodeAt() - 96, el.length)])
            .sort((n, m) => m[1] - n[1] || n[0] > m[0])[n - 1][0]
}

console.log(rank('Lagon,Lily', [1, 5], 2), 'Lagon')
console.log(rank('', [4, 2, 1, 4, 3, 1, 2], 6), 'No participants')
console.log(rank('Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin', [4, 2, 1, 4, 3, 1, 2], 4), 'Benjamin')
console.log(rank('Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin', [4, 2, 1, 4, 3, 1, 2], 8), 'Not enough participants')

// node "Prize Draw"