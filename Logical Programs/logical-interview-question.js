
// 1. Write a function to take string  and return count and remove all vowel from original string.
// input :  str =  "javascript" 

function reverseString(str) {
    return str.split('').reverse().join('')
}
// console.log(reverseString('javascript'));


// 2. Write a function to take  string a string and retrun as reverse of string.
// input : str = "My name is rahul"
// output:  str = "ym eman si luhar"

function reverseWords(str) {
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

console.log(reverseWords("My name is rahul")); // Output: "yM eman si luhar"


// 3. Write a function that takes a string, counts the number of vowels in the string, removes all vowels from the original string, and returns both the count of vowels and the modified string.

// inputStr = "My name is Rahul";
// output =  "My nm s Rhl"

function removeVowels(str) {
    // Define vowels
    const vowels = 'aeiouAEIOU';
    let count = 0;
    let result = '';

    // Loop through the string
    for (let char of str) {
        if (vowels.includes(char)) {
            count++; // Count vowels
        } else {
            result += char; // Add non-vowel characters to result
        }
    }
    return { count, result };
}
console.log(removeVowels("My name is Rahul"));


// 4. Program to find Reverse of a string without using built-in method?

function reverseString(str) {
    let reversed = ""; // Initialize an empty string

    // Loop through the string from the last character to the first
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]; // Append each character in reverse order
    }

    return reversed;
}

console.log(reverseString('My name is Rahul'));


// 5. Program to find longest word in a given sentence?
function longestWord(str) {
    let len = 0;
    let longWord = "";
    let strToArr = str.split(' ');

    for (let word of strToArr) {
        if (word.length > len) {
            len = word.length;
            longWord = word;
        }
    }

    return longWord;
}

console.log(longestWord('Soldiersss were still using dummy weapons yet available.')); 


// 6. How to check whether a string is palindrome or not?
function palindrome(str) {
    // Convert to lowercase and remove non-alphanumeric characters (optional)
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return str === reversed ? "Palindrome" : "Not Palindrome";
}

// Example Usage
console.log(palindrome('naman')); // Output: "Palindrome"
console.log(palindrome('Hello')); // Output: "Not Palindrome"


// 7. Write a program to remove duplicates from an array ?





// create a 3 group of  using sql,  if salary < 20000 then Low Salary, and if salary is between 20000 to 35000 then Mid salary, and if above 35000 the High slary
// table : employee
// colum: emp_id, slary, emp_name


// SELECT 
//     emp_id, 
//     emp_name, 
//     salary,
//     CASE 
//         WHEN salary < 20000 THEN 'Low Salary'
//         WHEN salary BETWEEN 20000 AND 35000 THEN 'Mid Salary'
//         WHEN salary > 35000 THEN 'High Salary'
//         ELSE 'Unknown'  -- This handles the case if salary is NULL or doesn't fit into the ranges
//     END AS salary_group
// FROM employee;
