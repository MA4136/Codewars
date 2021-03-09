//      Money, Money, Money

/*      Instructions
description: https://www.codewars.com/kata/563f037412e5ada593000114

        Examples
calculateYears(1000, 0.05, 0.18, 1000)) ==> 0
calculateYears(1000, 0.05, 0.18, 1100)) ==> 3
calculateYears(1000, 0.01625, 0.18, 1200)) ==> 14
*/

function calculateYears(principal, interest, tax, desired) {
    if (principal === desired) return 0

    let years = 0
    while (principal < desired) {
        let Interest = principal * interest
        let Tax = Interest * tax
        principal += (Interest - Tax)
        years++
    }
    return years
}

console.log(calculateYears(1000, 0.05, 0.18, 1000))
console.log(calculateYears(1000, 0.05, 0.18, 1100))
console.log(calculateYears(1000, 0.01625, 0.18, 1200))

// node "Money, Money, Money"