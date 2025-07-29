//  2. Write a program to check the given string is palindrome or not.
// input: "madam"
// output: "String palindrome"

// input: "abda"
// output: "String not palindrome"

function isPalindrome(input) {
    
    if (typeof input !== 'string' &&  typeof input !== 'number' ) {
        return "Invalid input";
    }

    let str =  input.toString().toLowerCase().trim();

    if (str.length === 0) {
        return "Invalid input";
    }

    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }

    return str === reversed ? "Palindrome" : "Not palindrome";
}

console.log(isPalindrome(121));          // Palindrome
// console.log(isPalindrome("madam"));      // Palindrome
// console.log(isPalindrome("hello"));      // Not palindrome
// console.log(isPalindrome("Madam"));      // Palindrome
// console.log(isPalindrome(""));           // Invalid input
// console.log(isPalindrome(null));         // Invalid input
// console.log(isPalindrome([]));           // Invalid input
