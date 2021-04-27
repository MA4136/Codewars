//      Backspaces in string

/*      Instructions
description: https://www.codewars.com/kata/5727bb0fe81185ae62000ae3
Assume '#' is like a backspace in string. This means that string 'a#bc#d' actually is 'bd'
Your task is to process a string with '#' symbols.

        Examples
cleanString('######831###dhkj####jd#dsfsdnjkf###d####dasns') ==> 'jdsfdasns'
cleanString('gfh#jds###d#dsd####dasdaskhj###dhkjs####df##s##d##') ==> 'gdasda'
cleanString('831####jns###s#cas/*####-5##s##6+yqw87e##hfklsd-=-28##fds##') ==> '6+yqw8hfklsd-=-f'
*/

function cleanString(string) {
    const result = []
    Array.from(string, (el => (el === '#' ? result.pop() : result.push(el))))
    return result.join('')
}

console.log(cleanString('######831###dhkj####jd#dsfsdnjkf###d####dasns'), 'jdsfdasns')
console.log(cleanString('gfh#jds###d#dsd####dasdaskhj###dhkjs####df##s##d##'), 'gdasda')
console.log(cleanString('831####jns###s#cas/*####-5##s##6+yqw87e##hfklsd-=-28##fds##'), '6+yqw8hfklsd-=-f')

// node "Backspaces in string"