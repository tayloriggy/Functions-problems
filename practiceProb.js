/*
Write a JavaScript function that accepts a string as a parameter 
and find the longest word within the string.
Hint: use the "split" method and a "for" loop
Steps:
1. Define a function that accepts a string as a parameter
2. Split the string that is passed in, turn it into an array of each individual word, and store it
in a variable.
3. Define a variable called longestWord and set it to the first index in the array of words.
4. Create a for loop that iterates through the array of words.
5. Create an if condition that compares the length of the current word with the length of the first index in the array of words. 
6. Return (print out) the longest word 
7. Call the function with the word string as the parameter.
*/

var stringOfWords = "Hello my name is Taylor";

function findLongestWord(str) {
    var arrayOfWords = str.split(" ");
    var longestWord = arrayOfWords[0];
    for (var i = 0; i < arrayOfWords.length; i++) {
        if (arrayOfWords[i].length > longestWord.length) {
            longestWord = arrayOfWords[i];
        }

    }


    return longestWord;

}

findLongestWord(stringOfWords);