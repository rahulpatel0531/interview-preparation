// replace() : The replace() method in JavaScript is used to replace a part of a string with another string

// syntax:  
// str.replace(substr, new_string);
// str.replace(regexp, new_string);

// str.replace(substr, function);
// str.replace(regexp, function);

// 1. Replace "Hello" with "Hi" in "Hello World"
let str = "Hello World";
console.log(str.replace("Hello", "Hi"));

// 2. Replace numbers with "." (using regex)
str = "Code12345";
console.log(str.replace(/\d/g, "."));


// 3. call a function for each match    
str = "Hello World";
newStr = str.replace(/o/g, function (match, index, originalText) {
    return "*" + match + "*";
})
console.log(newStr);