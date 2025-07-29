//  4. Write a C program to generate the first n terms of the Fibonacci sequence. 
// input: 10
// output: 0,1,1,2,3,5,8,13,21,34

// function fiboSequence(input){
//     if(input === 0) return null;
//     if(input === 1) return 1;

//     let first = 0;
//     let second = 1;
//     let series = `${first},${second}`

//     for(let i = 2; i < input; i++) {
//         let next = first + second
//         series += `,${next}`;
//         first = second;
//         second = next
//     }
//     // console.log(series)
//     return series;
// }

// console.log(fiboSequence(10));


function generateFibonacci(n) {
  let fibo = [0]

  if (n <= 0) return [];

  if (n > 1) {
    fibo.push(1);
  }

  for (let i = 2; i < n; i++) {
    let item = fibo[i - 1] + fibo[i - 2]
    fibo.push(item)
  }
  return fibo
}
console.log(generateFibonacci(10));


//  7. Write a program to print the Fibonacci series using recursion.

function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2)
}

function fiboSeriesUsingRecursion(num) {
  for (let i = 0; i < num; i++) {
    console.log( fibonacci(i));
  }
}
fiboSeriesUsingRecursion(10);

