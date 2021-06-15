//      Arabian String

/*      Instructions
description: https://www.codewars.com/kata/525821ce8e7b0d240b002615

        Examples
camelize('testing ABC') ==> 'TestingAbc'
camelize('example name') ==> 'ExampleName'
camelize('your-NaMe-here') ==> 'YourNameHere'
*/

// #1
function camelize(str) {
    const regExp = new RegExp(/[^a-z\d]/, 'gi')
    return str.split(regExp).filter(Boolean).map(el => el[0].toUpperCase() + el.slice(1).toLowerCase()).join('')
}

// #2
function camelize(str) {
    return str.toLowerCase().split(/[^a-z\d]/gi).reduce((acc, curr) => acc + (curr && (curr[0].toUpperCase() + curr.slice(1))), ``)
}

// #3
function camelize(str) {
    return str.split(/[^a-z\d]/gi).map(el => el.toLowerCase()).map(el => el.charAt(0).toUpperCase() + el.slice(1)).join('')
}

console.log(camelize('H qi,'))
console.log(camelize('XB006'))
console.log(camelize('testing ABC'))
console.log(camelize('example name'))
console.log(camelize('your-NaMe-here'))
console.log(camelize('Rugby:Club:2013'))
console.log(camelize('Arabian_stringTest'))

// node "Arabian String"