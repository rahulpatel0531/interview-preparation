
//  12.Write a program which deletes the duplicate element of an array

function removeDuplicatesUsingBuiltIn(arr){
    return [...new Set(arr)]
}

function deleteDuplicates(arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i])
        }
    }
    return unique
}

let input = [10, 20, 30, 10, 40, 20];
console.log(removeDuplicatesUsingBuiltIn(input))
console.log(deleteDuplicates(input))