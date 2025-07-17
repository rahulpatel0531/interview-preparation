// empty array
const emptyArray = [];

const array = [10, 20, 30]
console.log(array[1]);

// push at the end of array
array.push(40)

const length = array.length;


array.pop();

const testArr = [1, 2, 3, 4, 5];
testArr.splice(1, 1);
console.log('testArr', testArr);


const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
const array3 = array1.concat(array2)
console.log("array3 ", array3);


const fruits = ["apple", "banana", "orange"]
// The join() method converts an array into a string by concatenating its elements with a specified separator.
const result = fruits.join(',');
console.log('result', result);


const numbers = [1, 2, 3, 4];
// reduce() applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
const sum = numbers.reduce((accumulator, cuurentValue) => accumulator + cuurentValue, 0)
console.log("sum", sum);

// You can use the reverse() method, which reverses the elements in place.  
const reversedArray = numbers.reverse();
console.log("reversedArray", reversedArray);


const test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// filter() creates a new array with all elements that pass a provided test. It's useful for extracting elements that meet specific criteria.
const evenNumber = test1.filter((num) => num % 2 === 0)
console.log("evenNumber", evenNumber);


const test3 = [10, 20, 30, 40, 50];
// map() creates a new array by applying a provided function to each element of the original array
const mapArray = test3.map(num => num * num)
console.log('mapArray', mapArray);