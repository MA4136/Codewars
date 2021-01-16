//      Descending Order
//      www.codewars.com

/*      Instructions
Your task is to make a function that can take any non-negative integer as an argument and return
it with its digits in descending order.
Essentially, rearrange the digits to create the highest possible number.

        Examples
descendingOrder(42145)     ==> 54421
descendingOrder(145263)    ==> 654321
descendingOrder(123456789) ==> 987654321
*/

function descendingOrder(n) {
    return parseInt([...String(n)].sort((a, b) => b - a).join(""))
}

console.log(descendingOrder(42145))
console.log(descendingOrder(145263))
console.log(descendingOrder(123456789))

// node "Descending Order"