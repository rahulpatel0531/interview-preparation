// 1. Remove duplicate characters from a string

function removeDuplicate(str){
  // return  [...new Set(str)].join('')
  // return Array.from(new Set(str)).join('')
  
  let seen = {};
  let result = "";
  
  for (let i = 0; i < str.length; i++){
    let ch = str[i];
    if(!seen[ch]){
      result += ch;
      seen[ch] = true
    }
  }
  return result;
}

console.log(removeDuplicate("programming"));



//=============================================================================================================

// 2. Reverse a string without `.reverse()`

function reverseStr(str){
  // return str.split('').reverse().join('')

  let result = '';
  for(let i = str.length - 1; i >= 0; i--){
    result += str[i]
  }
  return result
}
console.log(reverseStr("hello"));



//========================================================================================================


// 3. Check if a string is a palindrome 

function isPalindrome(str){
  let copyStr = '';
  for(let i = str.length - 1; i >= 0; i--){
    copyStr += str[i];
  }
  return (str === copyStr) ? true : false
}
console.log(isPalindrome('madam'));


// ========================================================================================================

// 4. Count vowels & consonants

function countVowelAndConsonant(str){
  let vowels = 'aeiou';
  let vowelCount = 0;
  let consonantCount = 0;
  
  str = str.toLowerCase()
  
  for(let i = 0; i < str.length; i++){
    let ch = str[i];
    if(ch >= 'a' && ch <= 'z'){
      if(vowels.includes(ch)){
        vowelCount++
      } else {
        consonantCount++
      }
    }
  }

  return {vowels:vowelCount, consonants:consonantCount}
}

console.log(countVowelAndConsonant("javascript"));


//======================================================================================================

// 5. First non-repeating character             | `"swiss"`              | `"w"`

function firstNonRepeatingChar(str) {
    const freq = {};

    // First pass: Count occurrences
    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }

    // Second pass: Find first char with frequency 1
    for (let char of str) {
        if (freq[char] === 1) {
            return char;
        }
    }

    return null; // No unique char found
}

console.log(firstNonRepeatingChar("swiss")); // "w"


// ========================================================================================

// 6. Count occurrences of each character       | `"hello"`              | `{ h:1, e:1, l:2, o:1 }`

function eachCharOccurrences(str){
  let freq = {};
  
  for(let char of str){
    freq[char] = (freq[char] || 0) + 1
  }
  return freq;
}
console.log(eachCharOccurrences('hello'));


// ==============================================================================================================

// 7. Check if two strings are anagrams         | `"listen", "silent"`   | `true`
// two different words with the same letters


function checkStrIsAnagrams(str1, str2){
  
  let freq = {};
  if(str1.length !== str2.length) return "Not Anagrams";
  
  for(let char of str1){
    freq[char] = (freq[char] || 0) + 1;
  }
  
  for(let char of str2){
    if(!freq[char])  return "Not Anagrams"; // either undefined or 0
    
    freq[char]--;  // decrease count because we matched one occurrence
  }
  
  return "Anagrams";
}

// console.log(checkStrIsAnagrams("aabb", "abbb"));
// console.log(checkStrIsAnagrams("listen", "silent"));
console.log(checkStrIsAnagrams("rahul", "luhar"));




// =====================================================================================================

// 8. Find longest word in a sentence

function longestWordApproach1(str){
  
  let words = [];
  let word = '';
  
  
  for(let i = 0; i< str.length; i++){
    
    if(str[i] !== " "){
      word += str[i]
    }else{
      if(word.length > 0){
        words.push(word)
        word = '';
      }
    }
  }

  if(word){
    words.push(word);
    word = '';
  }
  
  for(let value of words){
    if(word.length < value.length){
      word = value
    }
  }

  return word;
}

console.log(longestWordApproach1('I love nodejs asynchronous programming'));


function longestWordBestAppraoch(str){
  
  let longest = '';
  let current = '';
  
  for(let i = 0; i < str.length; i++ ) {
    
    let char = str[i];
    if(char !== " "){
      current += char;
    }else{
      if(current.length > longest.length){
        longest = current
      }
      current ='';
    }
  }
  
  if(current.length > longest.length){
    longest = current
  }
  
  return longest;
}

console.log(longestWordBestAppraoch('I love nodejs asynchronous programming'));



function longestWordUsingBuitIn(sentence){
  
  // return sentence.split(' ').reduce((acc, curr) => (curr.length > acc.length) ? curr : acc , "")
  
  return sentence.split(' ').reduce((acc, curr) => {
    return (curr.length > acc.length) ? curr : acc
  }, "");
}

console.log(longestWordUsingBuitIn('I love nodejs asynchronous programming'));


//==============================================================================================================

// 9. Capitalize first letter of each word 

function capitalizeFirstLetter(str) {
    let words = [];
    let current = '';

    // Split manually without using split()
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            current += str[i];
        } else {
            if (current.length > 0) {
                words.push(current);
                current = '';
            }
        }
    }

    // Push last word if exists
    if (current.length > 0) {
        words.push(current);
    }

    // Build capitalized sentence
    let result = '';
    for (let i = 0; i < words.length; i++) {
        result += words[i][0].toUpperCase() + words[i].slice(1);
        if (i !== words.length - 1) {
            result += " ";
        }
    }

    return result;
}

console.log(capitalizeFirstLetter("hello world")); // Hello World


// =====================================================================================================


// 10.Compress string                           | `"aaabbc"`             | `"a3b2c1"` 

function compressString(str){
  
  let result = '';
  let count = 1;
  
  for(let i = 0; i < str.length; i++) {
    if(str[i] === str[i+1]){
      count++
    }else{
      result += str[i] + count;
      count = 1
    }
  }
  
  return result
}

console.log(compressString('aaabbc'));

