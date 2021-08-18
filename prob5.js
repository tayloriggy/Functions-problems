/* Write a JavaScript program that iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of 
the number and for the multiples of five print "Buzz". For numbers that are multiples of both three and five print "FizzBuzz".



Steps:
1. Write a for loop to iterate integers 1 to 100.
2. Write an if condition that states if the integer is a multiple of 3 then print "Fizz", if a multiple of 5 then print "Buzz".
3. If the integer is a multiple of both 3 and 5, then print "FizzBuzz".
4. That's it!






*/
for (var i = 0; i < 101; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i + " FizzBuzz");
    }
  
    else if (i % 3 === 0) {
      console.log(i + " Fizz");
    }
   
    else if (i % 5 === 0) {
      console.log(i + " Buzz");
    }
    
  }
    


