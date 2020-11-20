//      Highest and Lowest
//      www.codewars.com

/*  Instructions
In this little assignment you are given a string of space separated numbers,
and have to return the highest and lowest number.

    Examples
highAndLow("1 2 3 4 5")  ==> "5 1"
highAndLow("1 2 -3 4 5") ==> "5 -3"
highAndLow("1 9 3 4 -5") ==> "9 -5"
*/

function highAndLow(str) {
     return Math.max(...str.split(" ")) + " " + Math.min(...str.split(" "))

}

// You have passed all of the tests! :)