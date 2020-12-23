//      Friend or Foe?
//      www.codewars.com

/*  Instructions
Make a program that filters a list of strings and returns a list with only your friends name in it.
If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

    Examples
friend(["Ryan", "Kieran", "Mark"]) ==> ["Ryan", "Mark"]
friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]) ==> ["Ryan"]
friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]) ==> ["Jimm", "Cari", "aret"]
friend(["Love", "Your", "Face", "1"]) ==> ["Love", "Your", "Face"]
*/

function friend(friends) {
    return friends.filter(el => el.length === 4)
}

// console.log(friend(["Ryan", "Kieran", "Mark"]))
// console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]))
// console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]))
// console.log(friend(["Love", "Your", "Face", "1"]))

// node "Friend or Foe"

// Correct!
// You have passed all of the tests! :)