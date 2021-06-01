//      Simple Encryption #1 - Alternating Split

/*      Instructions
description: https://www.codewars.com/kata/57814d79a56c88e3e0000786
Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String. Do this n times!

        Examples
encrypt('This is a test!', 0) ==> 'This is a test!'
encrypt('This is a test!', 1) ==> 'hsi  etTi sats!'
encrypt('This is a test!', 3) ==> ' Tah itse sits!'
encrypt('This is a test!', -1) ==> 'This is a test!'

decrypt('This is a test!', 0) ==> 'This is a test!'
decrypt('hsi  etTi sats!', 1) ==> 'This is a test!'
decrypt(' Tah itse sits!', 3) ==> 'This is a test!'
decrypt('This is a test!', -1) ==> 'This is a test!'
*/

// #1
function encrypt(text, n) {
    if (!text || !n || n < 0) return text

    const string = [...text].filter((_, idx) => idx % 2).join('') +
        [...text].filter((_, idx) => !(idx % 2)).join('')

    return n > 1 ? encrypt(string, (n - 1)) : string
}

function decrypt(encryptedText, n) {
    if (!encryptedText || !n || n < 0) return encryptedText

    const first = encryptedText.slice(0, encryptedText.length / 2)
    const second = encryptedText.slice(encryptedText.length / 2)

    const string = [...second].map((_, idx) => second[idx].concat(first[idx] ? first[idx] : '')).join('')

    return n > 1 ? decrypt(string, (n - 1)) : string
}

// #2
function encrypt(text, n) {
    for (let i = 0; i < n; i++) {
        text = text && text.replace(/.(.|$)/g, '$1') + text.replace(/(.)./g, '$1')
    }

    return text
}

function decrypt(encryptedText, n) {
    const length = encryptedText && encryptedText.length / 2 | 0
    for (let i = 0; i < n; i++) {
        encryptedText = encryptedText.slice(length).replace(/./g, (_, i) => _ + (i < length ? encryptedText[i] : ''))
    }

    return encryptedText
}

console.log(encrypt('This is a test!', 0))
console.log(encrypt('This is a test!', 1))
console.log(encrypt('This is a test!', 3))
console.log(encrypt('This is a test!', -1))

console.log(decrypt('This is a test!', 0))
console.log(decrypt('hsi  etTi sats!', 1))
console.log(decrypt(' Tah itse sits!', 3))
console.log(decrypt('This is a test!', -1))

// node "Simple Encryption #1 - Alternating Split"