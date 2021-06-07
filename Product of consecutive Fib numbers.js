//      Product of consecutive Fib numbers

/*      Instructions
description: https://www.codewars.com/kata/5541f58a944b85ce6d00006a

        Examples
productFib(4895), [55, 89, true])
productFib(5895), [89, 144, false])
productFib(602070), [610, 987, true])
productFib(447577), [610, 987, false])
productFib(74049690), [6765, 10946, true])
productFib(84049690), [10946, 17711, false])
productFib(193864606), [10946, 17711, true])
*/

// #1
function productFib(prod) {
    let first = 0
    let second = 1
    while (first * second < prod) {
        second = first + second
        first = second - first
    }

    return [first, second, first * second === prod]
}

// #2
function productFib(prod) {
    let [a, b] = [0, 1]
    while (a * b < prod) [a, b] = [b, a + b]
    return [a, b, a * b === prod]
}

// #3
function productFib(prod, n = 0, n1 = 1) {
    return n * n1 >= prod ? [n, n1, n * n1 === prod] : productFib(prod, n1, n + n1)
}

console.log(productFib(4895))
console.log(productFib(5895))
console.log(productFib(602070))
console.log(productFib(447577))
console.log(productFib(74049690))
console.log(productFib(84049690))
console.log(productFib(193864606))

// node "Product of consecutive Fib numbers"