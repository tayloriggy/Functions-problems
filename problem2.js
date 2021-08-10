/* Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
Hint: use the "split", the Array#includes method, and a "for" loop or "forEach" loop.
1. Define a function that accepts a string as a parameter
2. Define a variable and set it equal to a string of words.
3. Define a variable named vowels and set it equal to the letters of a, e, i, o , and u.
4. Pass stringOfWords through the toLowerCase method to convert all letters to lower case, in case some vowels are upper case. 
5. Use the split method on the string of words to break it into an array of substrings of individual letters.
6. Use a for loop to go through each letter (beginning at index 0) and check to see if it is a vowel or not.
7. Use an if conditional to check if each letter is a vowel or not.
8. Define a variable named numberOfVowels and set the initial value to 0.
9. If a letter is a vowel, add 1 to the value of numberOfVowels. 
10. Each additional letter that is a vowel will add 1 to the previous count.
11. Once the end of the array is reached, the total number of vowels will be returned.
*/

var stringOfWords = "Follow the yellow brick road";

function findNumberOfVowels (str) {
    var vowels = ["a", "e", "i", "o", "u"];
    var arrayOfLetters = str.split("");
    var numberOfVowels = 0;
    for (var i = 0; i < arrayOfLetters.length; i++) {
        if(vowels.includes(arrayOfLetters[i].toLowerCase())) {
            numberOfVowels += 1;
        }
    }

    return numberOfVowels;
}

findNumberOfVowels(stringOfWords);