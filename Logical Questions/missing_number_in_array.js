
function findMissingNumber(arr) {
    let missingNumbers = [];
    arr.sort((a, b) => a - b)
    maxNumber = Math.max(...arr)
    console.log(arr);

    console.log("max number ", maxNumber);

    // arr[arr.length - 1]

    for (let i = arr[0]; i < maxNumber; i++) {

        // console.log(i);
        if (!arr.includes(i)) {
            missingNumbers.push(i)
        }
    }
    // return missing number array
    return missingNumbers;
}

const array = [2, 1, 3, 5, 7, 9, 15, 12];
const missingNumbers = findMissingNumber(array)
console.log('Missing Numbers ', missingNumbers);