let a = 5;
let b = 10;

// method 1

// a = a + b;
// b = a - b;
// a = a - b;
// console.log("a = ", a);
// console.log("b = ", b);



// method 2

[a, b] = [b, a]
console.log("a = ", a);
console.log("b = ", b);


