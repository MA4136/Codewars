//      Ideal electron distribution

/*      Instructions
description: https://www.codewars.com/kata/59175441e76dc9f9bc00000f
You are a khmmadkhm scientist and you decided to play with electron distribution among atom's shells.
You know that basic idea of electron distribution is that electrons should fill a shell untill it's holding the maximum number of electrons.

Rules:
Maximum number of electrons in a shell is distributed with a rule of 2n^2 (n being position of a shell).
For example, maximum number of electrons in 3rd shield is 2*3^2 = 18.
Electrons should fill the lowest level shell first.
If the electrons have completely filled the lowest level shell, the other unoccupied electrons will fill the higher level shell and so on.

        Examples
atomicNumber(1) ==> [1]
atomicNumber(10) ==> [2, 8]
atomicNumber(11) ==> [2, 8, 1]
atomicNumber(47) ==> [2, 8, 18, 19]
*/

function atomicNumber(number, lvl = 1, result = []) {
    let shell = 2 * (lvl ** 2)

    if (number > shell) {
        result.push(shell)
        atomicNumber(number - shell, ++lvl, result)
    } else
        result.push(number)

    return result
}

console.log(atomicNumber(1))
console.log(atomicNumber(10))
console.log(atomicNumber(11))
console.log(atomicNumber(47))

// node "Ideal electron distribution"