// *
// **
// ***
// ****
// *****

let n = 5;

for (let i = 1; i <= n; i++) {
  let row = '';  // Initialize an empty string for each row
  for (let j = 1; j <= i; j++) {
    row += '*';  // Add a '*' to the row
  }
  console.log(row);  // Print the row after the inner loop is done
}