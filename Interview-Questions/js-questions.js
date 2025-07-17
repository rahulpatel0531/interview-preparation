
// 1. Write a js function to flatten a nested array in to a single-dimensional array.
// input: [1, [2, [3, 4], 5], 6];
// output: [1,2,3,4,5,6]

function flattenArr(arr) {
    let res = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            res.push(...flattenArr(item))
        } else {
            res.push(item)
        }
    }
    return res;
}
// console.log(flattenArr([1, [2, [3, 4], 5], 6]))




// 2. Group an array of objects by the 'city' property.

// input: [{name: "Alice", city: "New York"}, {name: "Bob", city: "London"}, {name: "Charlie", city: "New York"}]
// outpt: {"New York" : [{name: "Alice", city: "New York"}, {name: "Charlie", city: "New York"}], London: [{name: "Bob", city: "London"}] }

function groupByCity(data, groupBy) {
    let res = {};
    for (const item of data) {
        if (!res[item[groupBy]]) {
            res[item[groupBy]] = [item]
        } else {
            res[item[groupBy]].push(item)
        }
    }
    return res
}

let inData = [{ name: "Alice", city: "New York" }, { name: "Bob", city: "London" }, { name: "Charlie", city: "New York" }];
// console.log(groupByCity(inData, 'city'));


// 3. Count how many times each element appears in an array.
// input: ["apple", "banana", "apple", "orange", "banana", "apple"]
// output: {apple:3, banana: 2, orange: 1}

function countReapet(arr) {
    let res = {};
    for (const item of arr) {
        if (res[item]) {
            res[item] = res[item]  + 1
        } else {
            res[item] = 1
        }
    }
    return res
}
// console.log(countReapet(["apple", "banana", "apple", "orange", "banana", "apple"]))


// 4. Find the longest word in a sentence
// input: "The quick brown fox jumped over the lazy dog";

// function findLongestWord(str) {
//     let word = '';
//     let words = [];
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== ' ') {
//             word += str[i]
//             console.log('word', word, i, str.length - 1);

//         } else {
//             if (word.length > 0) {
//                 words.push(word)
//                 word = ''
//             }
//         }
//     }
//     if (word.length > 0) {
//         words.push(word)
//     }
//     let count = 0;
//     let char = ''

//     for (const value of words) {
//         if(count < value.length){
//             count = value.length;
//             char = '';
//             char += value
//         }
//     }
//     return char
// }

function findLongestWord(str) {
    let words = str.split(' ');
    let longest = ''

    for (const word of words) {
        if (word.length > longest.length) {
            longest = word
        }
    }
    return longest

}
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));


// 5. Title Case a Sentence
// Convert each word in a sentence so that the first letter is capitalized and the remaining letters are lowercase.

function titleCase(str) {
    return str
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

console.log(titleCase('i am developer'))
console.log(titleCase('javascript is one of the most useful language in the world!'))




