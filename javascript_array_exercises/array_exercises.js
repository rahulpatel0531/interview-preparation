// 1. Write a JavaScript function to check whether an `input` is an array or not.

function is_array(arr) {
    return Array.isArray(arr);
}
// console.log("Result ", is_array("homepage"));
// console.log("Result ", is_array(["homepage"]));

///===================================================================================///

// 2. Write a JavaScript function to clone an array.
function arrClone(arr) {
    // const cloneArray = arr.slice();     
    // const cloneArray = [...arr]
    // const cloneArray = Array.from(arr)
    // const cloneArray = [].concat(arr)

    // const cloneArray = [];
    // for(let i=0; i<arr.length; i++){
    //     cloneArray.push(arr[i])
    // }

    // const cloneArray = arr.map(x => x)

    // const cloneArray = Array.of(...arr)

    const cloneArray = Object.assign([], arr)


    return cloneArray;
}
// console.log("Array Clone ", arrClone(["homepage", "infotech", ["solution"]]));

///===================================================================================///

// 3. Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.

function first(arr, n) {

    if (arr == null) {
        console.log("retun 0");
        return 0;
    }
    if (n == null) {
        console.log("retun arr[0]");

        return arr[0];
    }
    if (n < 0) {
        console.log("retun []");

        return [];
    }
    return arr.slice(0, n)
}
// console.log("Result ", first([7, 9, 0, -2]));
// console.log("Result ", first([], 3));
// console.log(first([7, 9, 0, -2], 3));
// console.log(first([7, 9, 0, -2], 6));
// console.log(first([7, 9, 0, -2], -3));

///===================================================================================///

// 4. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array

function last(arr, n) {
    let len = arr.length
    if (n == undefined) {
        return arr.slice(len - 1)
    }
    if (len < n) {
        return arr.slice()
    }
    return arr.slice(len - n)
}
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2], 3));
// console.log(last([7, 9, 0, -2], 6));

///===================================================================================///


// 5. Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
let myColor = ["Red", "Green", "White", "Black"];
let str1 = myColor.toString();
let str2 = myColor.join(' ');
let str3 = myColor.join('+');
// console.log("str1 ", str1);
// console.log("str2 ", str2);
// console.log("str3 ", str3);

///===================================================================================///

// 6. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

let input = "025468";
let convertIntiArr = input.split("");
let newStr = ""

convertIntiArr.forEach((element, index) => {
    if (Number(element) % 2 == 0 && Number(convertIntiArr[index + 1]) % 2 == 0) {
        newStr += element + '-'
    }
    else {
        newStr += element
    }
});
// console.log('newStr ', newStr);


///===================================================================================///


// 7. Write a JavaScript program to sort the items of an array.

// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

console.log(arr1.sort())

let newArr = []

// function sorting(array1) {
//     for (let i = 0; i < array1.length; i++) {
//         console.log('i ', (array1[i]));
//         console.log('i+1 ', (array1[i + 1]));

//         if (array1[i] < array1[i + 1]) {
//             newArr.push(array1[i])
//         } else {
//             newArr.push(array1[i + 1])
//         }
//     }
//     return newArr
// }

// console.log('Sort ', sorting(arr1))


// 8. Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

var arr2 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var item;
var mf = 1;
let count = 0;


for (let i = 0; i < arr2.length; i++) {

    for (let j = 0; j < arr2.length; j++) {

        if (arr2[i] == arr2[j]) {
            count++
        }
        if (mf < count) {
            mf = count;
            item = arr2[i]
        }
    }
    count = 0
}
console.log(`Item: ${item} is ${mf}  times`);


// 9. Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

let str = 'The Quick Brown Fox';
let UPPER = 'ABCDEFGHIHKLMNOPQRSTUVWXYZ';
let LOWER = 'abcdefghihklmnopqrstuvwxyz';
let result = [];

for (let i = 0; i < str.length; i++) {

    if (UPPER.includes(str[i])) {

        result.push(str[i].toLowerCase())

    } else if (LOWER.includes(str[i])) {

        result.push(str[i].toUpperCase())

    } else {

        result.push(str[i])
    }

}
// console.log('result ', result.join(''));


// 10. Write a JavaScript program that prints the elements of the following array.
// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

// for (let i = 0; i < a.length; i++) {

//     console.log(`row ${i}`);

//     for (let j = 0; j < a[i].length; j++) {

//         console.log(a[i][j]);

//     }
// }


// 11. Write a JavaScript program to find the sum of squares of a numerical vector. 
// console.log(sum_sq([0,1,2,3,4]));  output 30

function sum_sq(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i] * arr[i];
        sum += element;
    }
    return sum;
}

function sum_sq1(arr) {
    var sum = 0;
    var i = arr.length;

    while (i--) {
        sum += Math.pow(arr[i], 2)
    }
    return sum;


}
// console.log(sum_sq1([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(sum_sq([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


// 12. Write a JavaScript program to compute the sum and product of an array of integers.

function computeSumAndProduct(arr) {

    let sum = 0;
    let product = 1;
    let i = arr.length;

    while (i--) {
        sum += arr[i];
        product *= arr[i];
    }

    const result = {
        sum, product
    }
    return result
}

let arr = [1, 2, 3, 4, 5, 6];
let sum = 0;
let product = 1;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    product *= arr[i];
}
// console.log('Sum : ' + sum + ', ' + 'Product ' + product)
// console.log(computeSumAndProduct([1, 2, 3, 4, 5, 6]))


// 14. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
// Simple array : [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]
//Output : [1,2,3,4,5,6,7,8]


function removeDuplicate(arr1, arr2) {

    let arr = arr1.concat(arr2)

    let uniqueArr = [];

    for (const x of arr) {
        if (!uniqueArr.includes(x)) {
            uniqueArr.push(x)
        }
    }
    return uniqueArr.sort();
}
// console.log("Remove Duplicate ", removeDuplicate([1, 2, 2, 4, 5, 4], [7, 8, 7, 3, 6]));


function removeDuplicates(num) {
    var x,
        len = num.length,
        out = [],
        obj = {};

    for (x = 0; x < len; x++) {
        obj[num[x]] = num[x];
    }
    console.log('obj', obj)
    for (x in obj) {
        out.push(x);
    }
    return out;
}
// console.log("Remove Duplicate ", removeDuplicates([1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]));


// 15. We have the following arrays :
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."

color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let o = ["th", "st", "nd", "rd"];

function Ordinal(n) {
    var o = ["th", "st", "nd", "rd"],
        x = n
    return x + (o[x] || o[0]);
}

for (n = 0; n < color.length; n++) {
    var ordinal = n + 1;

    var output = (Ordinal(ordinal) + " choice is " + color[n] + ".");

    // console.log(output);
}


// 16. Write a JavaScript program to find the leap years in a given range of years.

function leapYear(stat_year, end_year) {

    range_year = [];

    for (let i = stat_year; i <= end_year; i++) {

        range_year.push(i)

    }

    let leapArr = [];

    range_year.forEach(val => {

        if ((val % 4 == 0 && val % 100 != 0) || (val % 100 == 0 && val % 400 == 0)) {
            leapArr.push(val)
        }
    });
    // console.log("Leap Year Array ", leapArr);
}

leapYear(2000, 2024)

// 17. Write a JavaScript program to shuffle an array.


function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

// console.log(shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))


// 18. Write a JavaScript program to perform a binary search.
// Note : A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value.
// Sample array :
// var items = [1, 2, 3, 4, 5, 7, 8, 9];
// Expected Output :
// console.log(binary_Search(items, 1)); //0
// console.log(binary_Search(items, 5)); //4

function binary_Search(items, value) {
    var firstIndex = 0,
        lastIndex = items.length - 1,
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);

    while (items[middleIndex] != value && firstIndex < lastIndex) {
        if (value < items[middleIndex]) {
            lastIndex = middleIndex - 1;
        }
        else if (value > items[middleIndex]) {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);
    }

    return (items[middleIndex] != value) ? -1 : middleIndex;
}
var items = [1, 2, 3, 4, 5, 7, 8, 9];
// console.log(binary_Search(items, 1));
// console.log(binary_Search(items, 5));


// 19. There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
// Sample array :
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]

array1 = [2, 4, 6, 8, 10, 12, 14];
array2 = [1, 3, 5, 7];
function sumOfBothArrayVal(array1, array2) {
    let len1 = array1.length;
    let len2 = array2.length;
    let sumArray = [];

    if (len2 > len1) {
        for (let i = 0; i < array2.length; i++) {
            array1[i] = array1[i] ? array1[i] : 0
            sumArray.push(array2[i] + array1[i]);
        }
    } else {
        for (let i = 0; i < array1.length; i++) {
            array2[i] = array2[i] ? array2[i] : 0
            sumArray.push(array2[i] + array1[i]);
        }
    }
    return sumArray;
}

// console.log("Result ", sumOfBothArrayVal(array1, array2))



// 20. Write a JavaScript program to find duplicate values in a JavaScript array.

// function find_duplicate_in_array(array) {
//     let duplicate = arry.filter((item, index) => arry.indexOf(item) !== index)
// }

// function find_duplicate_in_array(array) {
//     let duplicates = [];
//     let obj = {};

//     for (let i = 0; i < array.length; i++) {
//         const createElement = array[i];

//         if (obj[createElement] !== undefined) {
//             if (!duplicates.includes(createElement)) {
//                 duplicates.push(createElement)
//             }
//         } else {
//             obj[createElement] = true
//         }
//     }
//     return duplicates

// }

function find_duplicate_in_array(array) {

    let object = {};
    result = [];

    array.forEach(item => {

        if (!object[item]) {
            object[item] = 0
        }
        object[item] += 1
    });

    for (const prop in object) {
        if (object[prop] >= 2) {
            result.push(prop);
        }
    }
    return result;
}
// console.log(find_duplicate_in_array([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));


// 21. Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened to a single level.

// Sample Data:
// console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
// [1, 2, 3, 4, 5, 6]
// console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
// [1, 2, 3, [[4]], 5, 6]

function flatten(array, shallow, result = []) {

    if (shallow) {
        return result.concat(...array)
    }

    for (let i = 0; i < array.length; i++) {

        if (Array.isArray(array[i])) {
            flatten(array[i], shallow, result)
        } else {
            result.push(array[i])
        }
    }
    return result;
}
// console.log(flatten([1, [2], [3, [[4]]], [5, 6]]));
// console.log(flatten([1, [2], [3, [[4]]], [5, 6]], true));


// 22. Write a JavaScript program to compute the union of two arrays.
// Sample Data :
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]

function union(arra1, arra2) {

    if ((arra1 == null) || (arra2 == null))
        return void 0;

    var obj = {};

    // for (var i = arra1.length - 1; i >= 0; --i)
    //     obj[arra1[i]] = arra1[i];

    for (let i = 0; i < arra1.length; i++) {
        obj[arra1[i]] = arra1[i];
    }

    for (let j = 0; j < arra2.length; j++) {
        obj[arra2[j]] = arra2[j];
    }

    // for (var i = arra2.length - 1; i >= 0; --i)
    //     obj[arra2[i]] = arra2[i];

    var res = [];

    for (var n in obj) {

        if (obj.hasOwnProperty(n))
            res.push(obj[n]);
    }

    return obj;
}
// console.log(union([1, 2, 3], [100, 2, 1, 10]));




// 24. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

function checkUndefined(array) {
    result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i]) {
            result.push(array[i])
        }
    }
    return result;
}

console.log(checkUndefined([NaN, 0, 15, false, -22, '', undefined, 47, null]));


// for (let i = 0; i < array.length; i++) {

//     if (typeof array[i] != 'undefined') {

//         result.push(item)

//     } else if (typeof array[i] != 0) {

//         result.push(item)

//     } else if (item != false) {

//         result.push(item)

//     } else if (typeof item != 'null') {

//         result.push(item)

//     } else if (item != '') {

//         result.push(item)

//     }

// }



// 25. Find missing number in an array
// Simple : [1, 4, 7, 8, 9]

function missingNumber(array) {

    let count = Math.max(...array)
    // let count = array[array.length - 1];
    // console.log('count ', count);
    var missing = [];

    // for (var i = 1; i <= count; i++) {
    //     if (array.indexOf(i) == -1) {
    //         missing.push(i);
    //     }
    // }

    for (let i = 1; i <= count; i++) {
        if (!array.includes(i)) {
            missing.push(i);
        }
    }

    return missing;
}

console.log("missing number ", missingNumber([1, 4, 7, 8, 9]));



// 26. Avoid duplicate value form array
// Simple[1, 6, 2, 3, 4, 5, 2, 6, 8]
function avoidDuplicateNumber(array) {
    let tempArr = [];
    let duplicateValue = [];

    for (let i = 1; i < array.length; i++) {
        if (!tempArr.includes(array[i])) {
            tempArr.push(array[i])
        } else {
            duplicateValue.push(array[i])
        }
    }
    return duplicateValue
}
console.log("remove duplicate ", avoidDuplicateNumber([1, 6, 2, 3, 4, 5, 2, 6, 8, 12]));


// 27. Merge two array and remove duplicate
A = [1, 2, 3]
B = [3, 4, 5];

function concateAndRemove(a1, a2) {

    let tempArr = a1.concat(a2);
    let newArr = [];

    for (const item of tempArr) {
        if (!newArr.includes(item)) {
            newArr.push(item)
        }
    }
    return newArr
}
console.log("Concate two array and remove ", concateAndRemove([1, 2, 3], [3, 4, 5]));


// 25. Write a JavaScript function to sort the following array of objects by title value.
// Sample object :
var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
];

function compare_to_sort(a1, a2) {

    if (a1.title < a2.title) {
        return -1;
    }
    if (a1.title > a2.title) {
        return 1;
    }
    return 0;
}
// console.log(library.sort(compare_to_sort));


function test(array, target) {
    for (let i = 0; i < array.length; i++) {

        // target = array[i] + array[i + 1];
        if (array.includes(target)) {
            console.log("index ", i, i + 1)
            console.log("target ", target)
        }
    }
}

// test([10, 20, 10, 40, 50, 60, 70], 60);



// 26. Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number.

// Input: numbers= [10,20,10,40,50,60,70], target=50
// Output: 2, 3


function twoSum(nums, target_num) {
    var map = [];
    var indexnum = [];

    for (var x = 0; x < nums.length; x++) {
        if (map[nums[x]] != null) {
            var index = map[nums[x]];
            indexnum[0] = index;
            indexnum[1] = x;
            break;
        }
        else {
            map[target_num - nums[x]] = x;
        }
    }
    return indexnum;
}
// console.log(twoSum([10, 20, 10, 40, 50, 60, 70], 70));



// 28. Write a JavaScript function to find the longest common starting substring in a set of strings.

// Sample array: console.log(longest_common_starting_substring(['go', 'google']));
// Expected result: "go"


function longest_common_starting_substring(array) {
    var arr = arr1.concat().sort()
    return arr
    // return array[0];
    // let firstIndexLetter = array[i + 1];


}

// console.log(longest_common_starting_substring(['go', 'google']));


let arr11 = [1, 2, 5, 1, 5, 6, 7, 5];
// remove duplicate elements
arr1 = arr1.filter(function (element, index, array) {
    return arr.indexOf(element) === index;
});

console.log(arr1); // [1, 2, 5, 6, 7]








