//      Friend or Foe?

/*      Instructions
description: https://www.codewars.com/kata/55b42574ff091733d900002f
Make a program that filters a list of strings and returns a list with only your friends name in it.
If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

        Examples
friend(['Ryan', 'Kieran', 'Mark']) ==> ['Ryan', 'Mark']
friend(['Ryan', 'Jimmy', '123', '4', 'Cool Man']) ==> ['Ryan']
friend(['Love', 'Your', 'Face', '1']) ==> ['Love', 'Your', 'Face']
friend(['Jimm', 'Cari', 'aret', 'truehdnviegkwgvke', 'sixtyiscooooool']) ==> ['Jimm', 'Cari', 'aret']
*/

function friend(friends) {
    return friends.filter(el => el.length === 4)
}

console.log(friend(['Ryan', 'Kieran', 'Mark']))
console.log(friend(['Ryan', 'Jimmy', '123', '4', 'Cool Man']))
console.log(friend(['Love', 'Your', 'Face', '1']))
console.log(friend(['Jimm', 'Cari', 'aret', 'truehdnviegkwgvke', 'sixtyiscooooool']))

// node "Friend or Foe"