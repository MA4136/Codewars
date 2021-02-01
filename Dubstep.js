//      Dubstep
//      www.codewars.com

/*      Instructions
a long description is available here: https://www.codewars.com/kata/551dc350bf4e526099000ae5

        Examples
songDecoder("AWUBBWUBC") ==> "A B C"
songDecoder("WUBAWUBBWUBCWUB") ==> "A B C"
songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB") ==> "WE ARE THE CHAMPIONS MY FRIEND"
*/

function songDecoder(song) {
    return song.replace(/WUB/g, " ").trim().replace(/\s+/g, " ")
}

console.log(songDecoder("AWUBBWUBC"))
console.log(songDecoder("WUBAWUBBWUBCWUB"))
console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"))

// node "Dubstep"