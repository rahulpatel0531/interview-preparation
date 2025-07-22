let str = "Homepage, Infotech!!";



// Method 1

strToArr = str.split('').reverse().join('');



// console.log('str to arr ', strToArr);

// reverseArr = strToArr.reverse(); 
// console.log('Reverse Arr ', reverseArr);

// reverseStr = reverseArr.join('')

// console.log('Reverse String ', reverseStr);


// Method 2

reverseStr = '';
for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
}
// console.log('reverseStr ', reverseStr);


// Method 3

// let text = "how was yesterday"
// const myArr = Array.from(text).reverse().join('');