// Remove all duplicate characters from a string.
// Input: "programming"
// Output: "progamin"

// console.log(removeDuplicateChar("programming"));

function removeDuplicateChar(str) {
    let result = '';
    console.log('result', result.length);
    

    for (let i = 0; i < str.length; i++) {
        let isDuplicate = false;   

        for (let j = 0; j < result.length; j++) {
            console.log('length', j,  result.length, result[j], str[i]);
            
            if (str[i] === result[j]) {
                isDuplicate = true;
                break;
            }
        }

        if (!isDuplicate) {
            result += str[i];
        }
    }
    return result;
}


