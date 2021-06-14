//      Which are in?

/*      Instructions
description: https://www.codewars.com/kata/550554fd08b86f84fe000a58

        Examples
inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]) ==> ["arp", "live", "strong"]
inArray(["tarp", "mice", "bull"], ["lively", "alive", "harp", "sharp", "armstrong"]) ==> []
*/

function inArray(array1, array2) {
    return array1.filter(A => array2.find(B => B.match(A))).sort()
}

console.log(inArray(['arp', 'live', 'strong'], ['lively', 'alive', 'harp', 'sharp', 'armstrong']))
console.log(inArray(['tarp', 'mice', 'bull'], ['lively', 'alive', 'harp', 'sharp', 'armstrong']))

// node "Which are in"