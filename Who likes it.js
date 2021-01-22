//      Who likes it?
//      www.codewars.com

/*      Instructions
Implement a function likes :: [String] -> String, which must take in input array, containing the names of people
who like an item. It must return the display text as shown in the examples:

        Examples
likes([]) ==> 'no one likes this')
likes(['Peter']) ==> 'Peter likes this')
likes(['Jacob', 'Alex']) ==> 'Jacob and Alex like this')
likes(['Max', 'John', 'Mark']) ==> 'Max, John and Mark like this')
likes(['Alex', 'Jacob', 'Mark', 'Max']) ==> 'Alex, Jacob and 2 others like this')
*/

function likes(names) {
    return {
        0: `no one likes this`,
        1: `${names[0]} likes this`,
        2: `${names[0]} and ${names[1]} like this`,
        3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
        4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
    }[Math.min(names.length, 4)]
}

console.log(likes([]))
console.log(likes(['Peter']))
console.log(likes(['Jacob', 'Alex']))
console.log(likes(['Max', 'John', 'Mark']))
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))

// node "Who likes it"

// Impressive!