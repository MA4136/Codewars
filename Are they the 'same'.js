//      Are they the "same"?
//      www.codewars.com

/*      Instructions
full description is available here: https://www.codewars.com/kata/550498447451fbbd7600041c
Given two arrays a and b write a function comp(a, b) that checks whether the two arrays have the "same" elements,
with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

        Examples
a1 = [121, 144, 19, 161, 19, 144, 19, 11]
a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
comp(a1, a2) ==> true
*/

function comp(array1, array2) {
    return !array1 || !array2 ? false :
        String(array1.map(el => Math.pow(el, 2)).sort()) === String(array2.sort())
}

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19]))
console.log(comp([4, 10, 9, 3, 1, 4, 9, 5, 1, 6, 0, 7, 2, 7, 4, 0, 3, 6, 9, 1, 0, 9, 1], [25, 1, 9, 16, 36, 4, 1, 100, 81, 36, 1, 16, 49, 81, 9, 0, 49, 1, 1, 16, 81, 81, 0]))

// node "Are they the 'same'"