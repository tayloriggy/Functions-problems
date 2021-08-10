/* Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
Hint: use the "split", the Array#includes method, and a "for" loop or "forEach" loop.
1. Define a function that accepts a string as a parameter
2. Define a variable and set it equal to a string of words.
3. Define a variable named vowels and set it equal to "a, e, i, o ,u"
4. Use the split method on the string of words to break it into an array of substrings of individual letters.
5. Use a for loop to go through each letter (beginning at index 0) and check to see if it is a vowel or not.
6. Use an if conditional to check if each letter is a vowel or not.
7. Define a variable named numberOfVowels and set the initial value to 0.
8. If a letter is a vowel, begin counting at numerical 1.
9. Each additional letter that is a vowel will add 1 to the previous count.
10. Once the end of the array is reached, the total number of vowels will be returned.
11. Or use the includes() method. Would read stringOfWords.includes("a, e, i, o, u", 0)
*/

var stringOfWords = "Follow the yellow brick road";

function findNumberOfVowels (stringOfWords) {
    var vowels = ["a", "e", "i", "o", "u"];
    stringOfWords.toLowerCase();
    var arrayOfLetters = stringOfWords.split("");
    var numberOfVowels = 0;
    for (var i = 0; i < arrayOfLetters.length; i++) {
        if(vowels.includes(arrayOfLetters[i])) {
            numberOfVowels += 1;
        }
    }

    return numberOfVowels;
}

findNumberOfVowels(stringOfWords);