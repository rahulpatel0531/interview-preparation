
//  1. Write a program to find the reverse of a given string.
// input: "javascript"
// output: "tpircsavaj"

function reverseString(str) {
    if (str.length === 0) {
        return "Empty string not allowed"; // null
    }

    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

let input = "javascript dev";
let output = reverseString(input);
console.log("Reversed string:", output);  