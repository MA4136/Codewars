//      Josephus Permutation

/*      Instructions
description: https://www.codewars.com/kata/5550d638a99ddb113e0000a2
This problem takes its name by arguably the most important event in the life of the ancient historian Josephus:
according to his tale, he and his 40 soldiers were trapped in a cave by the Romans during a siege.

Refusing to surrender to the enemy, they instead opted for mass suicide, with a twist: they formed a circle
and proceeded to kill one man every three, until one last man was left (and that it was supposed to kill himself to end the act).

Well, Josephus and another man were the last two and, as we now know every detail of the story,
you may have correctly guessed that they didn't exactly follow through the original idea.

You are now to create a function that returns a Josephus permutation, taking as parameters the initial array/list of items to be permuted as if they were in a circle and counted out every k places until none remained.

        Examples
josephus([],3) ==> [])
josephus([1,2,3,4,5,6,7],3) ==> [3, 6, 2, 7, 5, 1, 4])
josephus([1,2,3,4,5,6,7,8,9,10],1) ==> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
josephus([1,2,3,4,5,6,7,8,9,10],2) ==> [2, 4, 6, 8, 10, 3, 7, 1, 9, 5])
josephus(["C","o","d","e","W","a","r","s"],4) ==> ['e', 's', 'W', 'o', 'C', 'd', 'r', 'a'])
*/

// #1
function josephus(items, k) {
    let result = []
    let pos = 0
    while (items.length > 0) {
        pos = (pos + k - 1) % items.length
        result.push(...items.splice(pos, 1))
    }
    return result
}

// #2
function josephus(items, k, pos = 0) {
    return [...items].map(_ => items.splice(pos = (pos + k - 1) % items.length, 1)[0])
}

console.log(josephus([], 3), [])
console.log(josephus([1, 2, 3, 4, 5, 6, 7], 3), [3, 6, 2, 7, 5, 1, 4])
console.log(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
console.log(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2), [2, 4, 6, 8, 10, 3, 7, 1, 9, 5])
console.log(josephus(['C', 'o', 'd', 'e', 'W', 'a', 'r', 's'], 4), ['e', 's', 'W', 'o', 'C', 'd', 'r', 'a'])

// node "Josephus Permutation"