//      Validate my Password

/*      Instructions
description: https://www.codewars.com/kata/59c01248bf10a47bd1000046
I will give you a string. You respond with "VALID" if the string meets the requirements or "INVALID" if it does not.

Passwords must abide by the following requirements:
More than 3 characters but less than 20.
Must contain only alphanumeric characters.
Must contain letters and numbers.

        Examples
validPass('a123') ==> 'VALID')
validPass('123') ==> 'INVALID')
validPass('a12') ==> 'INVALID')
validPass('1234') ==> 'INVALID')
validPass('1Username') ==> 'VALID')
validPass('Username') ==> 'INVALID')
validPass('Username123') ==> 'VALID')
validPass('Username123!') ==> 'INVALID')
validPass('passw0rdIsntTooLong') ==> 'VALID')
validPass('passw0rd1CharTooLong') ==> 'INVALID')
*/

function validPass(password) {
  const pattern = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{4,19}$/

  return pattern.test(password) ? "VALID" : "INVALID"
}


console.log(validPass('a123'), 'VALID')
console.log(validPass('123'), 'INVALID')
console.log(validPass('a12'), 'INVALID')
console.log(validPass('1234'), 'INVALID')
console.log(validPass('1Username'), 'VALID')
console.log(validPass('Username'), 'INVALID')
console.log(validPass('Username123'), 'VALID')
console.log(validPass('Username123!'), 'INVALID')
console.log(validPass('passw0rdIsntTooLong'), 'VALID')
console.log(validPass('passw0rd1CharTooLong'), 'INVALID')
