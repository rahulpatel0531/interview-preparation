// Find the second largest number in an array
// input: [4,9,0,2,8,7,1], [4, 9, 0, 12, 10, 8, 7, 1]

function secondLargest(arr) {

    if(arr.length < 2){
        return "Array should have atleast 2 element";
    }

    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

let arr = [10, 20, 20];  // [4, 9, 0, 12, 10, 8, 7, 1], [-2, -10, -5, -34]
console.log(secondLargest(arr))

// Corner cases
// => Array is empty
// => Array has duplicates
// => Array has negative numbers