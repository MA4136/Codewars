//      Dubstep

/*      Instructions
description: https://www.codewars.com/kata/551dc350bf4e526099000ae5

        Examples
songDecoder('AWUBBWUBC') ==> 'A B C'
songDecoder('WUBAWUBBWUBCWUB') ==> 'A B C'
songDecoder('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB') ==> 'WE ARE THE CHAMPIONS MY FRIEND'
*/

function songDecoder(song) {
    return song.replace(/(WUB)+/g, ' ').trim()
}

console.log(songDecoder('AWUBBWUBC'))
console.log(songDecoder('WUBAWUBBWUBCWUB'))
console.log(songDecoder('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB'))

// node "Dubstep"