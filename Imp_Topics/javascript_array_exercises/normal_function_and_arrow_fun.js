//////////////////////// ===================================== normal and arrow function ================


// 1. No arguments object in arrow functions

//=============== Normal function

// function print() {
//     console.log(arguments[0])
// }

// print("hello", 400, false)


//=============== Arrow function

// const print = () => {
//     console.log(arguments)
// }
// print("hello", 400, false)



// 2. Arrow functions do not create their own "this" binding

// const obj = {
//     name: 'Homepage',
//     age: 10,
//     print: function () {
//         console.log(this)
//     }
// }

// obj.print()


// const obj = {
//     name: 'deeecode',
//     age: 200,
//     print: function () {
//         function print2() {
//             console.log("Hello this ", this)
//         }

//         print2()
//     }
// }

// obj.print()





const obj = {
    name: 'deeecode',
    age: 200,
    print: function () {
        function print2() {
            console.log("Hello this ", this)
        }

        print2()
    }
}

obj.print()


// 3. Arrow functions cannot be used as constructors
// 4. Arrow functions cannot be declared
// 5 Arrow functions cannot be accessed before initialization

// printName()

// console.log("hello")

// const printName = () => {
//     console.log("i am dillion")
// }