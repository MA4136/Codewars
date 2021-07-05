//      Salesman's Travel

/*      Instructions
description: https://www.codewars.com/kata/56af1a20509ce5b9b000001e
The function 'travel' will take two parameters 'r' (addresses' list of all clients' as a string) and 'zipcode' and returns
a string in the following format: 'zipcode:street and town,street and town,.../house number,house number,...'

The street numbers must be in the same order as the streets where they belong.
If a given zipcode doesn't exist in the list of clients' addresses return 'zipcode:/'

        Examples
r = '123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432'
travel(r, 'OH 43071') ==> 'OH 43071:Main Street St. Louisville,Main Long Road St. Louisville/123,432'
travel(r, 'NY 56432') ==> 'NY 56432:High Street Pollocksville/786'
travel(r, 'NY 5643') ==> 'NY 5643:/'
*/

function travel(r, zipcode) {
    const regExp = RegExp('(\\d+)\\s+(.+)\\s+' + zipcode + '$')
    const streets = r.split(',').map(el => el.match(regExp)).filter(el => el)
    return zipcode + ':' + streets.map(el => el[2]) + '/' + streets.map(el => el[1])
}

r = '123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432'
console.log(travel(r, 'OH 43071'))
console.log(travel(r, 'NY 56432'))
console.log(travel(r, 'NY 5643'))

// node "Salesman's Travel"