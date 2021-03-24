// Calculating with Functions

/*      Instructions
description: codewars.com/kata/525f3eda17c7cd9f9e000b39
Write calculations using functions and get the results. Let's have a look at some examples:

        Examples
four(plus(nine())) ==> 13
six(dividedBy(two())) ==> 3
eight(minus(three())) ==> 5
seven(times(five())) ==> 35
*/

function zero(arithmetic)   { return arithmetic ? arithmetic(0) : 0 }
function one(arithmetic)    { return arithmetic ? arithmetic(1) : 1 }
function two(arithmetic)    { return arithmetic ? arithmetic(2) : 2 }
function three(arithmetic)  { return arithmetic ? arithmetic(3) : 3 }
function four(arithmetic)   { return arithmetic ? arithmetic(4) : 4 }
function five(arithmetic)   { return arithmetic ? arithmetic(5) : 5 }
function six(arithmetic)    { return arithmetic ? arithmetic(6) : 6 }
function seven(arithmetic)  { return arithmetic ? arithmetic(7) : 7 }
function eight(arithmetic)  { return arithmetic ? arithmetic(8) : 8 }
function nine(arithmetic)   { return arithmetic ? arithmetic(9) : 9 }

function plus(x) {
    return function (y) {
        return x + y
    }
}

function minus(x) {
    return function (y) {
        return y - x
    }
}

function times(x) {
    return function (y) {
        return x * y
    }
}

function dividedBy(x) {
    return function (y) {
        return Math.floor(y / x)
    }
}

console.log(four(plus(nine())))
console.log(six(dividedBy(zero())))
console.log(eight(minus(three())))
console.log(seven(times(five())))

// node "Calculating with Functions"