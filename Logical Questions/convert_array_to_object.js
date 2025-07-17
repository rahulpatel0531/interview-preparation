const array = ['apple', 'banana', 'cherry'];


// Method 1 : using for loop
let obj = {}

for (let i = 0; i < array.length; i++) {
    obj[i] = array[i]
}
console.log('obj', obj);

// Method 2 : Using Object.assign()  method

// The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

//syntax : 
//Object.assign(target, ...sources)


let company = ["Homepage", "Infotech", "Solutions", "Indore"]

// Using Object.assign to create
// new object from array

let arrayToObj = Object.assign({}, company)

// console.log('Array to Object ', arrayToObj);

console.log('Array to Object ', typeof JSON.stringify(arrayToObj));


// Method 3 = Using reduce method

let objUsingReduce = company.reduce((accumulator, currentValue, currentIndex) => {

    accumulator[currentIndex] = currentValue
    return accumulator

}, {})

console.log('Convert array to object using reduce method ', objUsingReduce);


// Method 4 :  you can use ES8 spread syntax on objects to achieve the same result:

console.log('Using spread operator ', { ...array });



