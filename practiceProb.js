/*
Write a JavaScript function that accepts a string as a parameter 
and find the longest word within the string.
Hint: use the "split" method and a "for" loop
Steps:
1. Define a function that accepts a string as a parameter
2. Split the string that is passed in, turn it into an array of each individual word, and store it
in a variable.
3. Define a variable called longestWord and set the inital value to 0
4. Define a variable called word and set the inital value to 0
5. Start looping through the array of letters 
6. Count how many letters are in each index(word)
7. Return (print out) the longest word 
*/

var stringOfWords = "Hello, my name is Taylor";

function findLongestWord(stringOfWords) {
    var arrayOfWords = stringOfWords.split(" ");
    var longestWord = arrayOfWords[0];
    for (var i = 0; i < arrayOfWords.length; i++) {
        if (arrayOfWords[i].length > longestWord.length) {
            longestWord = arrayOfWords[i];
        }

    }


    return longestWord;

}

findLongestWord(stringOfWords);