

// The split() method is used to split (break) a string into an array of substrings.

// Syntax :  str.split(separator, limit)
// limit(optional)


var str = "To do or not to do";

// splitting string at every space
let strToArr = str.split(' ');

console.log("string to array ", strToArr); // // ["To","do","or","not","to","do"]

str = "HTML-CSS-JavaScript";
console.log(str.split('-')); // // ["HTML","CSS","JavaScript"]

var str = "Books, Music, Movies, Games";

console.log(str.split(','));
