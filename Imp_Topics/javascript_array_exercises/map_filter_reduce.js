
// Reduce 

let arr = [5, 1, 3, 2, 6];

function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum
}

function findMax(arr) {
    let max = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

let result = findMax(arr);
// let result = findSum(arr);
// console.log(result);


// const output = arr.reduce(function (acc, curr) {
//     acc += curr
//     return acc
// }, 0)

// console.log(output);

const maxNumber = arr.reduce(function (max, curr) {
    if (curr > max) {
        max = curr;
    }
    return max;
}, 0)

console.log("maxNumber", maxNumber);
