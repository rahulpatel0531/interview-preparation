

let ages = [16, 19, 18, 22, 44, 10, 38];

// Defination: A function that accepts up to three arguments. 
//             The filter method calls the predicate function one time for each element in the array.
//             Returns the elements of an array that meet the condition specified in a callback function.

filterAge = ages.filter((value) => {
    if (value >= 18) {
        return value
    }
})

console.log('Above or Equal to 18 : ', filterAge);


const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

primeNumber = array.filter((currVal, index) => {

    // for (let i = 2; currVal > i; i++) {
    //     if (currVal % i === 0) {
    //         return false
    //     }
    // }

    let j = 2
    if (currVal > j) {
        if (currVal % j == 0) {
            return false
        }
        console.log('currVal', currVal);

    }

    let c = currVal > 1
    console.log('c ', c);
    return c

})

console.log("Prime Nimberssss : ", primeNumber);


