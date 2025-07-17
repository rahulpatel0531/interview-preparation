var arr = [1, 2, 1, 4, 3, 3, 1, 2, 4];



// method 1
let uniqueArr = []
let duplicateEle = []

arr.forEach((element) => {
    if (!uniqueArr.includes(element)) {
        uniqueArr.push(element)
    } else {
        duplicateEle.push(element)
    }
})

console.log(uniqueArr)
console.log(duplicateEle)


// Method 2


newSet = new Set(arr) // Create Set with uqiue element

// return an array from any object with length property
newArr = Array.from(newSet)

console.log('new unique Arr ', newArr);


//////// Method 3

// Using filter methos to remove duplicate

filterArr = arr.filter((ele, index) => {
    // console.log('ele', ele);
    // console.log('index', index);

    // x = arr.indexOf(ele) === index
    // console.log('x ', x);
    // console.log('================== ');


    return arr.indexOf(ele) === index
})
// console.log('filterArr ', filterArr);


//////////////// Method 4

// using reduce method to remove duplicates

let uniqueArray = arr.reduce((accumulator, currentValue) => {

    if (accumulator.indexOf(currentValue) === -1) {
        accumulator.push(currentValue)
    }
    return accumulator
}, [])

console.log('Using reduce remove duplicate ', uniqueArray);
