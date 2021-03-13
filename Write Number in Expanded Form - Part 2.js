//      Write Number in Expanded Form - Part 2

/*      Instructions
description: https://www.codewars.com/kata/write-number-in-expanded-form-part-2
You will be given a number and you will need to return it as a string in Expanded Form.

        Examples
expandedForm(1.24) ==> '1 + 2/10 + 4/100'
expandedForm(7.304) ==> '7 + 3/10 + 4/1000'
expandedForm(88.353824) ==> '80 + 8 + 3/10 + 5/100 + 3/1000 + 8/10000 + 2/100000 + 4/1000000'
*/

function expandedForm(num) {
    const [firstNum, secondNum] = num.toString().split('.')

    const first = [...String(firstNum)]
        .map((el, idx, array) => el + '0'.repeat((array.length - idx) - 1))
        .filter(el => Number(el) !== 0)
        .join(' + ')

    const second = [...String(secondNum)].map((el, idx) => el + `/${10 ** (idx + 1)}`)
        .filter(el => Number(el[0]) !== 0)
        .join(' + ')

    return first ? `${first} + ${second}` : second
}

console.log(expandedForm(1.24))
console.log(expandedForm(7.304))
console.log(expandedForm(88.353824))

// node "Write Number in Expanded Form - Part 2"