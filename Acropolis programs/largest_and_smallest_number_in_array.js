
//  13.Write a program to find largest and smallest number in an array.

function largestAndSmallest(arr) {

    let largest = -Infinity; // arr[0]
    let smallest = Infinity; // arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }

        if (arr[i] < smallest) {
            smallest = arr[i]
        }
    }
    return {
        smallest,
        largest
    };
}

let input = [65, 45, 75, 25, 95, 15, 85];
console.log(largestAndSmallest(input));
