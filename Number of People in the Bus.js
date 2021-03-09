//      Number of People in the Bus

/*      Instructions
description: https://www.codewars.com/kata/5648b12ce68d9daa6b000099

        Examples
busStops([[10,0],[3,5],[5,8]]) ==> 5
busStops([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]) ==> 21
busStops([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]) ==> 17
*/

function busStops(array) {
    return array.reduce((bus, [getIn, getOut]) => bus + getIn - getOut, 0)
}

console.log(busStops([[10, 0], [3, 5], [5, 8]]))
console.log(busStops([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]))
console.log(busStops([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]))

// node "Number of People in the Bus"