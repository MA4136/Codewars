//      Deodorant Evaporator

/*      Instructions
description: https://www.codewars.com/kata/5506b230a11c0aeab3000c1f
This program tests the life of an evaporator containing a gas.
We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day)
and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.
The program reports the nth day (as an integer) on which the evaporator will be out of use.

        Examples
evaporator(10, 10, 10) ==> 22
*/

// #1
function evaporator(_, evap_per_day, threshold) {
    let days = 0
    let percentages = 100
    while (percentages >= threshold) {
        percentages -= percentages * evap_per_day / 100
        days++
    }
    return days
}

// #2
function evaporator(_, evap_per_day, threshold) {
    evap_per_day = evap_per_day / 100
    threshold = threshold / 100
    return Math.ceil(Math.log(threshold) / Math.log(1 - evap_per_day))
}

console.log(evaporator(10, 10, 10), 22)

// node "Deodorant Evaporator"