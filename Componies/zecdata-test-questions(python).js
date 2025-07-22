
// 1. write a program to get min and max even number from array without built in method.
//     arr = [4, 3, 2, 11, 6, 9, 20]
 
let arr = [4, 3, 2, 11, 6, 9, 20];
let min = null; let max = null;

for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 == 0) {
        if (min === null || arr[i] < min) {
            min = arr[i];
        }

        if (max === null || arr[i] > max) {
            max = arr[i]
        }
    }
}
// console.log("Min Even:", min);  // 2
// console.log("Max Even:", max);  // 20

/////=========================================================================================


// 2. write a program to for below pattern.

//         *
//        * *
//       * * *
//      * * * *
//     * * * * *


let n = 5;
for (let i = 1; i <= n; i++) {
    let line = '';

    for (let j = 1; j <= n - i; j++) {
        line += ' ';
    }

    for (let k = 1; k <= i; k++) {
        line += '* '
    }
    // console.log(line);
}
/////=========================================================================================


// 3. write a program to reverse string as word without buit in method.
//     input: "I am Javascript Developer"
//     output: "Developer javscript am I"

let str = "I am Javascript Developer";
let word = "";
let words = [];

// Split words manually
for (let i = 0; i <= str.length; i++) {
    if (str[i] === ' ' || i === str.length) {
        if (word.length > 0) {
            words.push(word);
            word = '';
        }
    } else {
        word += str[i];
    }
}

// Reverse array manually
let result = '';
for (let i = words.length - 1; i >= 0; i--) {
    result += words[i];
    if (i !== 0) result += ' ';
}
// console.log(result);

/////=========================================================================================



// 4. write a program to to get even and consnests count in the string.
// input: "as we discussed"
// even: 5
// constonent: 8

let input = "as we discussed";
let vowels = ['a', 'e', 'i', 'o', 'u'];
let even = 0, consonant = 0;

for (let i = 0; i < input.length; i++) {
    let ch = input[i].toLowerCase();

    if (vowels.includes(ch)) {
        even++;
    } else {
        consonant++;
    }
}
// console.log('Even count:', even);
// console.log('Consonant count:', consonant);

/////=========================================================================================


// 5. write to check even number without mod(%) opeator.

function isEven(n) {
    while (n >= 2) {
        n = n - 2;
    }
    return n === 0;
}

// console.log(isEven(4));
// console.log(isEven(5));

///// ===============================================================================

// 6. write a program to take a number as parameter and retun sum  (withut convert number  as string)
// input: 176
// output: 14


function digitSum(n) {
    let sum = 0;
    while (n > 0) {
        let digit = n - Math.floor(n / 10) * 10;
        sum += digit;
        n = Math.floor(n / 10)
    }
    return sum;
}
let num = 176;
console.log(digitSum(num));


// 7. write a program to check expression paranthesis balanced or not
// input: {[]{()}}
// output: balanced

// imput: [{[]}(]
// output: unbalanced

function isBalanced(str) {
    let stack = [];
    let pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let i = 0; i < str.length; i++) {
        ch = str[i];
        if (ch === '(' || ch === '{' || ch === "[") {
            stack.push(ch);
        } else if (stack.length === 0 || stack.pop() !== pairs[ch]) {
            return 'unbalanced';
        }
    }
    return stack.length === 0 ? 'balanced' : 'unbalanced';
}
console.log(isBalanced("{[]{()}}"));   // balanced
console.log(isBalanced("[{[]}(]"));    //  



