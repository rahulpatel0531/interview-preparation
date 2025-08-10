// Q. Return indexes of element whose sum is equal to target
// let data = [3, 4, 6, 2, 1, 6]
// // Output = [[1, 4], [0, 3]]


// let array = [3, 4, 6, 2, 1, 6];
// let target = 6;
// let output = [];

// for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//         if(target === (array[i] + array[j])){
//             output.push([i, j])
//         }
//     }
// }
// console.log('output' , output);

//==============================================================================================================

// Q  sort the array based on the length of each string

// let fruits = ["strawberry", "fig", "apple", "date", "banana"]
// // Output: ["fig", "date", "apple", "banana", "strawberry"]


// let len = fruits.length;
// for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//         if (fruits[i].length > fruits[j].length) {
//             console.log('fruits[i]', i, fruits[i])
//             console.log('fruits[j]', j, fruits[j])

//             let temp = fruits[i];
//             fruits[i] = fruits[j];
//             fruits[j] = temp;
//             console.log('fruit', fruits);
//         }
//     }
// }

// Method 1
// console.log('output', fruits.sort((a, b) => a.length - b.length));

//==================================================================================================================

// Find the first non-repeating character
// let data = "aabbccddefg"
// Output: "e"


// let str = "aabbccddefg";
// let charCount = {};
// let finalChar = '';

// for (let item of str) {
//     console.log(item);
//     if (!charCount[item]) {
//         charCount[item] = 1
//     } else {
//         charCount[item] = charCount[item] + 1
//     }
//     console.log('charCount', charCount);
// }

// for (const char of str) {
//     if (charCount[char] === 1) {
//         finalChar += char
//         console.log('finalChar', finalChar)
//         return 
//     }
// }

// method 2

// let character = ''
// for (const char of str) {
//     if (str.indexOf(char) === str.lastIndexOf(char)) {
//         character  += char
//         console.log(character);
//         return
//     }
// }


//=============================================================================================================

// Remove all duplicate characters from a string.
// Input: "programming"
// Output: "progamin"


let unique = "";
let str = "programming";

for (const char of str) {
    let isDuplicate = false;
    // if (!unique.includes(char)) {
    //     unique += char
    // }

    for (const itt of unique) {
        if (itt == char) {
            isDuplicate = true
        }
        
    }
}
console.log('unique', unique);





