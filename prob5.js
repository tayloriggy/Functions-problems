/* Write a JavaScript program that iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of 
the number and for the multiples of five print "Buzz". For numbers that are multiples of both three and five print "FizzBuzz".

Everywhere you used a "for" loop previously, replace it with 
either a #forEach, #map, or #filter method. Reference (study only forEach, map, or filter). 


Steps:
1. Write a for loop to iterate integers 1 to 100.
2. Write an if condition that states if the integer is a multiple of 3 then print "Fizz", if a multiple of 5 then print "Buzz".
3. If the integer is a multiple of both 3 and 5, then print "FizzBuzz".
4. 






*/
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];

function isFizzOrBuzz (num) {
var n = num.toString();
var arrayOfNumbers = n.split(" ");
    for (var i = 0; i < num.length; i++) {
        if (i % 3 === 0) {
            console.log("Fizz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
    }
}

num.forEach(isFizzOrBuzz(45));