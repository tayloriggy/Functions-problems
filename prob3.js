/*Write a JavaScript function that accepts two arguments, 
a string and a letter and the function will 
count the number of occurrences of the specified letter within the string.
Steps:
1. Define a function called occurencesOfLetter and pass in parameters of a string of words and the letter 'i'.
2. Define a variable called stringOfWords and set it equal to a string of words.
3. Define a variable called letter and set it equal to "i".
3. Define a variable called countOfI and set it equal to 0.
4. Define an array called arrayOfLetters to represent the indivudual letters of stringOfWords.
4. Use the split method on stringOfWords to convert it into an array of individual letters.
5. Use a for loop to increment through the letters within arrayOfLetters.
6. Use an if condition that checks if each letter is the letter "i".
7. Convert each letter in arrayOfLetters to lower case using the toLowerCase() method.
7. For each time an occurence of "i" happens, add 1 to countOfI.
8. Return the number of occurences of the letter "i".
9. Call the function occurencesOfLetter(stringOfWords) to get the output.
*/

var stringOfWords = "Italy is known for its Italian cuisine of pizza";

function occurencesOfLetter(str, letter) {
    var arrayOfLetters = str.split("");
    var letterCount = 0;
    for(var x = 0; x < arrayOfLetters.length; x++){
        if(arrayOfLetters[x].toLowerCase() === letter.toLowerCase()) {
            letterCount += 1;
        }
    }

    return letterCount;
}

occurencesOfLetter(stringOfWords);