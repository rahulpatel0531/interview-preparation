// const fruits = ["Apple", "Banana", "Cherry", "Dewberry", "Elderberry"];
const fruits = ["Homepage", "Infotech", "Solutions", "LLP", "Indore"];


firstLetter = [];

// Using for loop

// for (let i = 0; i < fruits.length; i++) {

//     const first = fruits[i].charAt();
//     firstLetter.push(first)
// }


// Using foreach
fruits.forEach((currValue) => {
    firstLetter.push(currValue.charAt())
})

console.log('first character ', firstLetter);