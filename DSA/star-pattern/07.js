// 1
// 10
// 101
// 1010
// 10101


let n = 5;
// for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < i + 1; j++) {
//         row = row + ((j + 1) % 2)
//     }
//     console.log(row);
// }

for (let i = 0; i < n; i++) {
    let row = "";
    let toggle = 1;
    for (let j = 0; j < i + 1; j++) {
        row = row + toggle
        if(toggle == 1){
            toggle = 0;
        }else{
            toggle = 1;
        }
    }
    console.log(row);
}


//=====================================================================================


// 1
// 01
// 010
// 1010
// 10101

let toggle = 1;
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
        row = row + toggle
        if(toggle == 1){
            toggle = 0;
        }else{
            toggle = 1;
        }
    }
    console.log(row);
}