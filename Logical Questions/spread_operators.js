
// Spread Operator : The spread operator is denoted by  three "..." dots and it is used to expand (विस्तार करना) an iterable object
//                      (such as :  array, string, and object) into multiple elements.

// With Array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// expand the array into multiple elements
console.log(...numbers); // 1 2 3 4 5 6 7 8

// With String
let str = "Homepage"
// expand string into the multiple characters
console.log(...str); // H o m e p a g e


// 1. Creating a Copy of an Array

var arr = [1, 2, 3, 4, 5]
let arrCopy = [...arr]

console.log("arrCopy ", arrCopy);


// 2. Combining Arrays
// Another common application of the spread operator is to combine two or more arrays.


let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = [7, 8, 9]

var arr = [...arr1, ...arr2, ...arr3];

console.log("Combine Array", arr);


// 3. Passing an Array as an Argument to a Function
// One of the most useful applications of the spread operator is that it can pass all the elements of an array as individual arguments to a function.

function sum(...xyz) {
    let sum = 0;

    for (let i = 0; i < xyz.length; i++) {
        sum += xyz[i];
    }
    return sum;
}

var arr = [1, 2, 3, 4, 5];
console.log("Total Sum ", sum(...arr)); // 15


// 4. Using Spread Operator with Math.max() and Math.min()

var arr = [5, 1, 22, -10, 45, 8, 10];

console.log("Max number ", Math.max(...arr));
console.log("Min number ", Math.min(...arr));


// 5. Create Copy of Object
// Just like the array spread operator can also be used to create a copy of an object.

let car = {
    brand: "Ford",
    model: "mustang",
    year: 1994
}

let copyObj = { ...car }

console.log("Copy object ", copyObj);


// 6. Merge Two Objects

// You can also combine the properties of two objects using the spread operator.

let obj1 = {
    name: "TATA",
    model: "Safari",
    year: 2023
}

let obj2 = {
    color: "Black",
    price: 2000000,
}

let obj = { ...obj1, ...obj2 }
console.log("Merge Two Object ", obj);



// 7. Get All Characters of a String
// Just like separating an array into individual elements, you can also separate a string into individual characters using the spread operator.

str = 'To do or not'

let chars = [...str];

console.log('Get All Characters ', chars);


// 8. Convert Set to Array
// Set is a data structure that does not allow duplicate values. You can't access elements of a set using the index. But you can convert a set to an array using the spread operator.

let set = new Set();
set.add("Apple")
set.add("Banana")
set.add("Orange")

// Convert set to array
let setToArr = [...set];
console.log("Convert set to array ", setToArr);
// console.log("Check array or not ", Array.isArray(setToArr));


// 9. Convert Map to Array
// Map is a data structure that stores key-value pairs. You can't access elements of a map using the index. But you can convert a map to an array using the spread operator.

let map = new Map();
map.set('fruit', 'apple')
map.set('vegetable', 'carrot')


// Convert map to array
let mapToArr = [...map]
console.log("Convert Map to Array ", mapToArr);









