

/// ****************************** find unreapeated character ==============
let str = "aabbceff"
let unrepeatedChars  = [];
for(let i = 0; i < str.length; i++){
    let isRepeated  = false;
    
    for(let j = 0; j < str.length; j++){
        if(i !== j && str[j] == str[i]){
            // console.log(i, j)
            isRepeated = true;
            break;
        }
    }
    
    if(!isRepeated) {
         unrepeatedChars += str[i];
        // unrepeatedChars.push(str[i])
    }
}
console.log('unrepeatedChars', unrepeatedChars)


// /*******************************************  Unique Arrray without built in method */

function getUniqueArray(arrays) {
    let uniqueArray = []; // This will store only unique elements
  
    // Loop through each input array
    for (let i = 0; i < arrays.length; i++) {
      let currentArray = arrays[i];
  
      // Loop through each element of the current array
      for (let j = 0; j < currentArray.length; j++) {
        let element = currentArray[j];
  
        // Check if the element is already in uniqueArray
        let isDuplicate = false;
        for (let k = 0; k < uniqueArray.length; k++) {
          if (uniqueArray[k] === element) {
            isDuplicate = true;
            break;
          }
        }
  
        // If the element is not a duplicate, add it to uniqueArray
        if (!isDuplicate) {
          uniqueArray.push(element);
        }
      }
    }
  
    return uniqueArray;
  }
  
  // Example usage:
  let a = [1, 2, 3, 4];
  let b = [2, 9, 4, 5];
  let c = [3, 8, 5, 6];
  let d = [4, 5, 6, 7];
  
  let result = getUniqueArray([a, b, c, d]);
  console.log(result); // Output: [1, 2, 3, 4, 9, 5, 8, 6, 7]



  // *********************** write a function to reverse a string and convert uppercase to lower and vice versa.
let str = "lUhaR";

function convertUpperAndLower(str) {
    let reverseStr = str.split('').reverse();
    let changeArr = []
    
    
    for(let i = 0; i < reverseStr.length; i++ ){
        
        console.log('reverseStr[i]', reverseStr[i])
        if(reverseStr[i] == reverseStr[i].toLowerCase()){
            changeArr.push(reverseStr[i].toUpperCase())
        }else{
            changeArr.push(reverseStr[i].toLowerCase())
        }
    }
    
    let joinArr = changeArr.join('');
    return joinArr
}

console.log(convertUpperAndLower(str))



 // *********************** write a function to take a string then revrese it and  check string palindrome or not. If palindrome
 

  