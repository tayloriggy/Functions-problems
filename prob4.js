/* Write a JavaScript function that checks whether a passed string is a palindrome or not.
A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
Steps:
1. Define a function called checkPalindrome and pass a string as a parameter.
2. Define a variable called len and set it equal to the length of the string passed in. 
3. Change the string characters passed to lower case and remove all non-alphanumeric characters.
4. Use the replace method to replace all non-alphanumeric characters with alphanumeric characters.
5. Check to see if each string character reads the same going forward as they do going backwards. Do this by splitting the string in half.




*/

function checkPalindrome (str) {
    var len = str.length;
    for(var i = 0; i < len / 2; i++) {
        if(str[i].toLowerCase().replace(/[^a-zA-Z0-9]+/g, "") !== str[len - 1 - i].toLowerCase().replace(/[^a-zA-Z0-9]+/g, "")) {
            return "It is not a palindrome.";
        }
    }

    return "It is a palindrome.";
}