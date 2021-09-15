//      Strange Strings Parser!

/*      Instructions
description: https://www.codewars.com/kata/584d88622609c8bda30000cf
Here you have a connected to a socket, and the data looks very strange.
It seems to be separated by a random special character!
Oh No! We need your help to find the special character, parse the data, and return it translated!
There isn't much time, hurry we need your help!

        Examples
wordSplitter('11:11:11:11:11') ==> ['11','11','11','11','11']
wordSplitter('56&SHORT!BEACH+WEST=HOUSE') ==> ['56','SHORT','BEACH', 'WEST','HOUSE']
wordSplitter('RADIO+FREQ+12500+NW+1600+END') ==> ['RADIO','FREQ','12500','NW','1600','END']
wordSplitter('CODE*SEVEN|FOURTY#THREE&HUNDRED') ==> ['CODE','SEVEN','FOURTY','THREE','HUNDRED']
wordSplitter('320000;56C*7200RPM#MODE%65>LATCH?ON') ==> ['320000','56C','7200RPM','MODE','65','LATCH','ON']
wordSplitter('320000;56C:7200RPM#MODE%65>LATCH?ON') ==> ['320000','56C','7200RPM','MODE','65','LATCH','ON']
wordSplitter('32.0500;-6C:PITCH=-72#ROLL!21.3*REGISTER:90.345689&ARMED?-25') ==> ['32.0500','-6C','PITCH','-72','ROLL', '21.3','REGISTER','90.345689','ARMED','-25']
*/

function wordSplitter(string) {
    return string.match(/[\w.-]+/g)
}

console.log(wordSplitter('11:11:11:11:11'))
console.log(wordSplitter('56&SHORT!BEACH+WEST=HOUSE'))
console.log(wordSplitter('RADIO+FREQ+12500+NW+1600+END'))
console.log(wordSplitter('CODE*SEVEN|FOURTY#THREE&HUNDRED'))
console.log(wordSplitter('320000;56C*7200RPM#MODE%65>LATCH?ON'))
console.log(wordSplitter('320000;56C:7200RPM#MODE%65>LATCH?ON'))
console.log(wordSplitter('32.0500;-6C:PITCH=-72#ROLL!21.3*REGISTER:90.345689&ARMED?-25'))

// node "Strange Strings Parser"