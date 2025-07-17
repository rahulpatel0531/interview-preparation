let numbers = [100, 300, 50, 200, 400, 250];

// console.log("sort", numbers.sort())
// console.log("sort", numbers.sort((a, b) => a - b))
// console.log("descending", numbers.sort((a, b) => b - a))

// let largeNumbers = numbers.sort((a, b) => b - a)
// console.log('second largest', largeNumbers[1])



function secondLargest() {
    let first = -1;
    let second = -1;
    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] > first) {
            second = first;
            first = numbers[i]
        } else {
            if (numbers[i] > second && numbers[i] != first) {
                second = numbers[i]
            }
        }
    }
    console.log('first', first);
    console.log('second', second);
}
// secondLargest()




