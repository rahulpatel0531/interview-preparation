
let person = {
    name: "Home",
    age: 10,
    address: {
        city: "indore",
        country: "india"
    }
}
console.log('person', person);

// shallow copy
let copyPerson = Object.assign({}, person)

// deep copy
let personDeepCopy = JSON.parse(JSON.stringify(person))

// console.log('copyPerson', copyPerson);
// copyPerson.address.city = 'Mumbai';
// console.log('after modify copyPerson', copyPerson);
// console.log('person', person);


console.log('personDeepCopy', personDeepCopy);
personDeepCopy.address.city = 'Mumbai';
console.log('after modify personDeepCopy', personDeepCopy);
console.log('person', person);


//////////////////// Set 

let uniqueNum = new Set()

uniqueNum.add(5)
uniqueNum.add(15)
uniqueNum.add(5)

// console.log('uniqueNum', uniqueNum);
// console.log('uniqueNum', uniqueNum.size);


let arrWithDuplicateElement = [10, 20, 10, 40, 20, 30]
let mySet = new Set(arrWithDuplicateElement)

console.log('mySet', mySet);
let convertSetToArr = [...mySet];
console.log('convertSetToArr', convertSetToArr);














