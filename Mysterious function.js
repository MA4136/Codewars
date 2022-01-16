//      Mysterious function

/*      Instructions
description: https://www.codewars.com/kata/55217af7ecb43366f8000f76
Among the ruins of an ancient city a group of archaeologists found a mysterious function with lots of HOLES in it called getNum(n).
They tried to call it with some arguments. And finally they got this journal:
-getNum(300) #-> returns 2
-getNum(90783) #-> returns 4
-getNum(123321) #-> returns 0
-getNum(89282350306) #-> returns 8
-getNum(3479283469) #-> returns 5
The archaeologists were totally stuck with this challenge. They were all in desperation but then.... came YOU the SUPER-AWESOME programmer.
Will you be able to understand the mystery of this function and rewrite it?

        Examples
getNum(300) ==> 2
getNum(90783) ==> 4
getNum(123321) ==> 0
getNum(3479283469) ==> 5
getNum(89282350306) ==> 8
*/

function getNum(number) {
  const str = String(number)
  let result = 0

  for (let n = 0; n < str.length; n++) {
    switch (str[n]) {
      case '0':
      case '6':
      case '9':
        result++
        break
      case '8':
        result += 2
        break
    }
  }
  return result
}

console.log(getNum(300), 2)
console.log(getNum(90783), 4)
console.log(getNum(123321), 0)
console.log(getNum(3479283469), 5)
console.log(getNum(89282350306), 8)

// node "Mysterious function"