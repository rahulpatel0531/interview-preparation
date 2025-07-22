

// The substring() is a built-in javascript method which is used to extract a substring from a string.

// It takes 2 indexes as arguments and returns the substring between those indexes.

// str.substring(startIndex, endIndex);

let str = "Learning to code";


console.log(str.substring(2, 6)); // 6 position (index) not include

console.log(str.substring(5));


// The substring() method swaps its two arguments if indexStart is greater than indexEnd , meaning that a string is still returned. The slice() method returns an empty string if this is the case.

// /example

str = "Homepage"

console.log(str.substring(0, 4));
console.log(str.substring(4, 0));

console.log(str.slice(0, 4))
console.log(str.slice(4, 0))



