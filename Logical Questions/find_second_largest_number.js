arr = [12, 3, 15, 4, 8, 9, 1];

// console.log(arr.sort((a, b) => a - b));  // ascending
// console.log(arr.sort((a, b) => b - a));   //// descending
// console.log(arr[1]);
console.log("------------------------");

// console.log(arr.sort());

// Find second largest element
function secondLargestNumber(arr) {
    let first = -1
    let second = -1
    for (let i = 0; i < arr.length; i++) {
        console.log('first', i, first);
        console.log('second', i, second);
        if (arr[i] > first) {
            second = first
            first = arr[i];
            console.log('if first', first);

        } else if (arr[i] > second && arr[i] !== first) {
            second = arr[i]
            console.log('else second', second);

        }
    }
    console.log("Second Largest Number ", second);
    console.log("First Largest Number ", first);
}
secondLargestNumber(arr)
