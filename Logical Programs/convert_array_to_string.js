
// convert number to string
num = 120

// console.log(typeof num.toString());
// console.log(typeof String(num));
// console.log(typeof `${num}`);



// Note:  To convert an array to a string you can use the join() method.

// The join() array method creates a new string by concatenating all array members to a single string.
// JavaScript array to string

var arr = [10, 25, true, 'Hello'];

console.log(arr.join()); // string  // 10,25,true,Hello

console.log(arr.join('')); // string // 1025trueHello

console.log(arr.join(' ')); // string // 10 25 true Hello

console.log(arr.join('-')); // string // 10-25-true-Hello


////// ================= Convert a JavaScript object into a string with JSON.stringify().
const obj = { name: "John", age: 30, city: "New York" };
const myJSON = JSON.stringify(obj);

console.log(myJSON); // 
console.log(JSON.parse(myJSON)); // 




var arr1 = [{ a: 1 }, { b: 2 }];
function joinArray(arr) {
    var str = '';
    for (var i = 0; i < arr1.length; i++) {
        if (typeof arr[i] === 'object') {
            str += JSON.stringify(arr[i]);
        } else {
            str += arr[i];
        }
        if (i !== arr.length - 1) {
            str += ',';
        }
    }
    return str;
}

console.log('Convert Array object in Sting ', joinArray(arr1));


