//      Find four numbers

/*      Instructions
description: https://www.codewars.com/kata/582957651c1f59b99b0000aa
There is a positive integer n. Please find four numbers a,b,c,d(they can be the same number), let: a**2 + b**2 + c**2 + d**2 = n   and   a >= b >= c >= d > 0
The result should be an array [a, b, c, d]; Perhaps there are a lot of valid results, please choose the one which has largest a or
largest b(if the value of a are the same) or largest c(if the value of a,b are the same).

        Examples
find4Number(16) ==> [2,2,2,2]
find4Number(99)  ==> [9, 4, 1, 1]
find4Number(110) ==> [9,4,3,2]
find4Number(211) ==> [13, 5, 4, 1]
*/

function find4Number(number) {
    for (let n = Math.floor(Math.sqrt(number)); n > 0; n--)
        for (let m = Math.floor(Math.sqrt(number - n * n)); m > 0; m--)
            for (let k = Math.floor(Math.sqrt(number - n * n - m * m)); k > 0; k--) {
                let l = number - n * n - m * m - k * k
                let p = Math.floor(Math.sqrt(l))
                if (p > 0 && p * p === l)
                    return [n, m, k, p]
            }
}

console.log(find4Number(16), [2, 2, 2, 2])
console.log(find4Number(99), [9, 4, 1, 1])
console.log(find4Number(110), [9, 4, 3, 2])
console.log(find4Number(211), [13, 5, 4, 1])

// node "Find four numbers"