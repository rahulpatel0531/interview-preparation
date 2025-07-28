// Q. Return indexes of element whose sum is equal to target
// let data = [3, 4, 6, 2, 1, 6]
// let target = 5
// // Output = [[1, 4], [0, 3]]


// let result = [];
// let len  = data.length;

// for(let i = 0; i < len; i++ ){

//     for(let j = i+1;  j <= len; j++){

//         if((data[i] + data[j]) === target){
//             result.push([i, j]) // push index
//         }
//     }
// }
// console.log(result)


// ====================================================================================================

// Q  sort the array based on the length of each string

let fruits = ["strawberry", "fig", "apple", "date", "banana"]
// Output: ["fig", "date", "apple", "banana", "strawberry"]

// method 1 : 
// console.log(fruits.sort((a, b) => a.length - b.length));

// Mothod 2 :

// let len = fruits.length;

// for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//         if (fruits[i].length > fruits[j].length) {
//             // [fruits[i], fruits[j]] = [fruits[j], fruits[i]];   

//             let temp = fruits[i]
//             fruits[i] = fruits[j]
//             fruits[j] = temp;
//         }
        
//     }
// }
// console.log(fruits);

//===============================================================================================================

// Find the first non-repeating character
let data = "aabbccddefg"
// Output: "e"

// Soluion 1
// function firstNonRepeatingChar(str) {
//   for (let char of str) {
//     if (str.indexOf(char) === str.lastIndexOf(char)) {
//       return char;
//     }
//   }
//   return null;
// }

// console.log(firstNonRepeatingChar(data));


// Solution 2

// let charCount = {}
// for (const char of data) {
//     if (charCount[char]) {
//         charCount[char] = (charCount[char]) + 1;
//     } else{
//         charCount[char] = 1
//     }
// }

// for (const char of data) {
//     if(charCount[char] === 1) {
//         console.log(char)
//         return
//     }
// }





 


