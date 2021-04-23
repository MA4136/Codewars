//      Most profit from stock quotes

/*      Instructions
description: https://www.codewars.com/kata/597ef546ee48603f7a000057
Return the most profit from stock quotes.

        Examples
getMostProfitFromStockQuotes([ 6, 5, 4, 3, 2, 1])   ==> 0
getMostProfitFromStockQuotes([ 1, 2, 3, 4, 5, 6])   ==> 15
getMostProfitFromStockQuotes([ 1, 6, 5, 10, 8, 7 ]) ==> 18
*/

function getMostProfitFromStockQuotes(quotes) {
    return quotes.reduce((acc, curr, idx) => acc + Math.max(...quotes.slice(idx)) - curr, 0)
}

console.log(getMostProfitFromStockQuotes([6, 5, 4, 3, 2, 1]))
console.log(getMostProfitFromStockQuotes([1, 2, 3, 4, 5, 6]))
console.log(getMostProfitFromStockQuotes([1, 6, 5, 10, 8, 7]))

// node "Most profit from stock quotes"