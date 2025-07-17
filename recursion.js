
//  Recursion   =  Recursion is a function that calls itself during its execution. 

// Example : print 1 to 100 number without any loop

function printNumber(n){
    if(n>100) return;
    console.log('Number : ', n);
    printNumber(n + 1);
}

printNumber(1)