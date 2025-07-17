// Reverse a string without using built-in methods.
// Input: "hello"
// Output: "olleh

console.log(reverseString("hello"))

function reverseString(input){
  let revserstr = '';
  
  for(let i = input.length -1; i >= 0; i-- ){ 
    revserstr += input[i];
  }
  
  return  revserstr;
}

// ================================================================================================================


// Remove all occurrences of a given character from a string.
// Input: "hello world", 'o'
// Output: "hell wrld"


console.log(removeChar("hello world", 'o'))

function removeChar(str, char){
  let newStr = '';
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== char) {
      newStr += str[i]
    }
  }
  return newStr;
}

// ================================================================================================================



// Find the first non-repeated character in a string.
// Input: "swiss"
// Output: "w"


console.log(firstNonRepeatedCharacter("swissiwr"))

function firstNonRepeatedCharacter(inputString) {
  let charCount = {}; // Create an object to store character frequencies

  // First loop: Count occurrences of each character
  for (let i = 0; i < inputString.length; i++) {
      let char = inputString[i];
      if (charCount[char]) {
          charCount[char]++; // Increment count if character already exists in the object
      } else {
          charCount[char] = 1; // Initialize count to 1 if character is seen for the first time
      }
  }

  // Second loop: Find the first character with a count of 1
  for (let i = 0; i < inputString.length; i++) {
      if (charCount[inputString[i]] === 1) {
          return inputString[i]; // Return the first non-repeated character
      }
  }

  return null; // Return null if no non-repeated character is found
}

// ================================================================================================================



// Count the number of vowels in a string.
// Input: "education"
// Output: 5


function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
      // Convert to lowercase to handle both uppercase and lowercase inputs
      const char = str[i].toLowerCase();
      // Check if the character is in the vowels array
      for (let j = 0; j < vowels.length; j++) {
          if (char === vowels[j]) {
              count++;
              break; // Exit the inner loop once a match is found
          }
      }
  }

  return count;
}

// ================================================================================================================


// Check if a string is a palindrome.
// Input: "racecar"
// Output: true

function checkPalindrome(str) {
  const length = str.length;

  // Compare characters from the start and end
  for (let i = 0; i < length / 2; i++) {
      if (str[i] !== str[length - 1 - i]) {
          return false; // Not a palindrome if characters don't match
      }        
  }

  return true; // All characters matched
}

console.log(checkPalindrome("racecar"));



// =====================================================================================================================

// Remove all duplicate characters from a string.
// Input: "programming"
// Output: "progamin"

function removeDuplicates(str) {
  let result = ""; // To store the final string without duplicates

  for (let i = 0; i < str.length; i++) {
      let isDuplicate = false;

      // Check if the current character exists in the result
      for (let j = 0; j < result.length; j++) {
          if (str[i] === result[j]) {
              isDuplicate = true;
              break; // No need to check further if duplicate is found
          }
      }

      // If the character is not a duplicate, add it to the result
      if (!isDuplicate) {
          result += str[i];
      }
  }

  return result;
}



// =======================================================================================================================

// Extract all duplicate characters from a string.
// Input: "mississippi"
// Output: "is"


function extractDuplicates(str) {
  let duplicates = ""; // To store duplicate characters
  let checked = "";    // To keep track of characters already processed

  for (let i = 0; i < str.length; i++) {
      let count = 0;

      // Count occurrences of the current character in the string
      for (let j = 0; j < str.length; j++) {
          if (str[i] === str[j]) {
              count++;
          }
      }

      // Check if the character is a duplicate and not already in 'checked'
      let alreadyChecked = false;
      for (let k = 0; k < checked.length; k++) {
          if (str[i] === checked[k]) {
              alreadyChecked = true;
              break;
          }
      }

      if (count > 1 && !alreadyChecked) {
          duplicates += str[i];
          checked += str[i]; // Add character to 'checked' to prevent reprocessing
      }
  }

  return duplicates;
}

// Test the function
const input = "mississippi";
const output = extractDuplicates(input);
console.log(output); // Output: "isp"


//===========================================================================================================================


// Replace all spaces in a string with a given character.
// Input: "hello world", '-'
// Output: "hello-world"

function replaceSpaces(str, char) {
  let result = ""; // To store the modified string

  for (let i = 0; i < str.length; i++) {
      if (str[i] === " ") {
          result += char; // Replace space with the given character
      } else {
          result += str[i]; // Append the original character
      }
  }

  return result;
}

// Test the function
console.log(replaceSpaces("hello world", "-")); // Output: "hello-world"


// ======================================================================================================================


// 1. Find the first non-repeating character and return its index:
function firstNonRepeatingCharacter(s) {
  const charCount = {};

  // Count the frequency of each character
  for (const char of s) {
      charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the index of the first non-repeating character
  for (let i = 0; i < s.length; i++) {
      if (charCount[s[i]] === 1) {
          return i;
      }
  }

  return -1; // Return -1 if no non-repeating character is found
}

// Example usage
console.log(firstNonRepeatingCharacter("leetcode")); // Output: 0
console.log(firstNonRepeatingCharacter("loveleetcode")); // Output: 2
console.log(firstNonRepeatingCharacter("aabb")); // Output: -1

