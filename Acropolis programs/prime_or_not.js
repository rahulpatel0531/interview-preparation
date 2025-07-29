// 8. Write a C program to check the given number is prime or not.

//Note:  A prime number is a number greater than 1 that has exactly two factors: 1 and itself.



function isPrime(num){
    if(num <= 1) return false;

    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false
        }
    }
    return true

}

if(isPrime(17)){
    console.log("Prime");
}else{
    console.log("Not prime");
}