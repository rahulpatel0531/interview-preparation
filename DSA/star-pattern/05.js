// 12345
// 1234
// 123
// 12
// 1



let n = 7
// for (let i = n; i > 0; i--) {
//     let row = "";

//     for (let j = 1; j <= i; j++) {
//         row = row + (j)
//     }
//     console.log(row);
// }

for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n-i; j++) {
        row = row + (j+1)
    }
    console.log(row);
}



// *****
// ****
// ***
// **
// *
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n-i; j++) {
        row = row + "*"
    }
    console.log(row);
}