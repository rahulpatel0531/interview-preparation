// 10.Write a program to find out second largest element of an unsorted array.

function secondLargest(input){

    if (input.length < 2) {
        return "Array should have atleast 2 element"
    }

    let firstLargest = -Infinity
    let secondLargest = -Infinity

    for (let i = 0; i < input.length; i++) {
        if (input[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = input[i];
        }else if (input[i] > secondLargest && input[i] !== firstLargest) {
            secondLargest = input[i];
        } 
    }
    return secondLargest
}

// const numbers = [42, 7, 19, 3, 25, 14];
// const numbers = [25, 10, 25]
console.log(secondLargest(numbers))