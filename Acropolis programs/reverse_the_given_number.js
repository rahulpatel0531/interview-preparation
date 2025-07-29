//  3. Write a program to reverse the given number.
// input: 12345
// output: 54321

function reverseNumber(num){

    let isNegative = num < 0;
    num = Math.abs(num);
    
    let reversed = 0;
    while(num > 0){
        let rem = num % 10;
        reversed = reversed * 10 + rem
        num =  Math.floor(num / 10);
    }
    return isNegative ? -reversed : reversed
}

console.log(reverseNumber(123));   // 321
// console.log(reverseNumber(-456));  // -654
// console.log(reverseNumber(0));     // 0


