//      Alphabet wars - reinforces massacre

/*      Instructions
description: https://www.codewars.com/kata/593e2077edf0d3e2d500002d

        Examples
let reinforces = [
    'g964xxxxxxxx', 'myjinxin2015', 'steffenvogel', 'smile67xxxxx', 'giacomosorbi',
    'freywarxxxxx', 'bkaesxxxxxxx', 'vadimbxxxxxx', 'zozofouchtra', 'colbydauphxx']

let airstrikes = [
    '* *** ** ***', ' ** * * * **', ' * *** * ***', ' **  * * ** ',
    '* ** *   ***', '***   ', '**', '*', '*']

// alphabetWar(reinforces, airstrikes) ==> 'codewarsxxxx'
// alphabetWar(["abcdefg","hijklmn"], ["   *   ", "*  *   "]) ==> 'hi___fg'
// alphabetWar(["aaaaa","bbbbb", "ccccc", "ddddd"],  ["*", " *", "   "]) ==> 'ccbaa'
*/

function alphabetWar(reinforces, airstrikes) {
    return reinforces[0]
        .split('')
        .map((A, idxA) => {
            return (reinforces[airstrikes.filter(B => B[idxA - 1] === '*' ||
                                                      B[idxA] === '*' ||
                                                      B[idxA + 1] === '*').length] ||
                                                      '_'.repeat(reinforces[0].length))[idxA]
        })
        .join('')
}

let reinforces = [
    'g964xxxxxxxx', 'myjinxin2015', 'steffenvogel', 'smile67xxxxx', 'giacomosorbi',
    'freywarxxxxx', 'bkaesxxxxxxx', 'vadimbxxxxxx', 'zozofouchtra', 'colbydauphxx']

let airstrikes = [
    '* *** ** ***', ' ** * * * **', ' * *** * ***', ' **  * * ** ',
    '* ** *   ***', '***   ', '**', '*', '*']

console.log(alphabetWar(reinforces, airstrikes))
console.log(alphabetWar(['abcdefg', 'hijklmn'], ['   *   ', '*  *   ']))
console.log(alphabetWar(['aaaaa', 'bbbbb', 'ccccc', 'ddddd'], ['*', ' *', '   ']))

// node "Alphabet wars - reinforces massacre"