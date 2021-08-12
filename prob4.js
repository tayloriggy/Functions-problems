/* Write a JavaScript function that checks whether a passed string is a palindrome or not.
A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
Steps:
1. Define a function called checkPalindrome and pass a string as a parameter.
2. Define a variable called arrayOfStrings and change the string to lower case and remove all non-alphanumeric characters.
3. Check to see if each character (arrayOfStrings[i]) reads the same going forward as they do going backwards.
4. Reverse the string and if it is equal to the forward string passed then return true (it is a palindrome). If it is not equal, then return false
(not a palindrome).
4. Use a for loop



*/

function checkPalindrome (str) {
    var arrayOfStrings = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
    
}