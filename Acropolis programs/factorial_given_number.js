//  5. Write a program to find the factorial of a given number.

// function factorial(n){
//     if(n == 0) return 0;
//     if(n == 1) return 1;
//     let fact = 1;

//     for (let i = 1; i <= n; i++) {
//         fact = fact * i
//         console.log(fact)
//     }
//     return fact
// }

// console.log(factorial(1));

//  6. Write a program to find the factorial of a given number using recursion.

function genFactorial(n) {
    if (n == 0) {
        return 1
    } else {
        return n * genFactorial(n - 1) // recursion
    }
}
console.log(genFactorial(0));
