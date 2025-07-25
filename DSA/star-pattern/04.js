// 1
// 22
// 333
// 4444
// 55555

let n = 7;

// solution 1
// for (let i = 0; i < n; i++) {
//     let row = ""
//     for(let j = 0; j <= i; j++){
//         row = row + (i+1)
//     }
//     console.log(row)
// }


for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row = row + (i)
    }
    console.log(row);
}