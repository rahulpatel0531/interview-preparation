// *
// **
// ***
// ****

let n = 4;

for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < i + 1 ; j++) {  // j <= i (same)
        row = row + "*";
    }
    console.log(row)
}