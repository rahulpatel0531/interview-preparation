// slice(): Returns a shallow copy of a portion of an array. It does not modify the original array.
// end index not included

let array = [1, 2, 3, 4, 5];
let slicedArr = array.slice(1,3)
console.log('sliceArr', slicedArr);


// splice(): Modifies the original array by adding or removing elements.

let array1 = [1, 2, 3, 4, 5];
let spliceArr = array1.splice(1,3)
console.log('spliceArr', spliceArr);
console.log('array1', array1);



