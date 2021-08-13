/* Write a JavaScript function that checks whether a passed string is a palindrome or not.
A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
Steps:
1. Define a function called checkPalindrome and pass a string as a parameter.
2. Use the split method on the passed string to turn it into an array of individual letters, and store it in a variable.
3. Reverse the order of that array so the letters now read backwards and store it in a variable.
4. Compare the original array (letters reading forward) with the reversed array (letters reading backward).
5. Convert the reversed array back into a string.
6. If the original string and reversed string are equal, then the string that was passed in is a palindrome (returns true).
7. If they are not equal, the string is not a palindrome (returns false).




*/

function checkPalindrome (str) {
    var arrayOfLetters = str.split("");
    var reversedArrayOfLetters = arrayOfLetters.reverse();
    var reversedString = reversedArrayOfLetters.join("");
    return str === reversedString;
}

checkPalindrome("racecar");