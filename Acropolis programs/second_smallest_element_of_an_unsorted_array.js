// 11.Write a program to find out second smallest element of an unsorted array.

function secondSmallest(arr) {
    if (arr.length < 2) {
        return "Array should have atleast 2 element"
    }

    let firstSmallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < firstSmallest) {
            secondSmallest = firstSmallest
            firstSmallest = arr[i]
        } else if (arr[i] < secondSmallest && arr[i] !== firstSmallest) {
            secondSmallest = arr[i]
        }
    }
    return secondSmallest
}

const numbers = [42, 7, 19, 3, 25, 14];
// const numbers = [25, 10, 25]
console.log(secondSmallest(numbers))