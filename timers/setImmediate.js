// setImmediate()

// setImmediate() is a Node.js function that schedules a callback to run on the next iteration (or tick) of the event loop, after I/O events.



// console.log('Start');

// setImmediate(() => {
//   console.log('Inside setImmediate');
// });

// console.log('End');



// output

// Start
// End
// Inside setImmediate



// const fs = require('fs');

// fs.readFile(__filename, () => {
//   setTimeout(() => console.log('setTimeout'), 0);
//   setImmediate(() => console.log('setImmediate'));
//   process.nextTick(() => console.log('nextTick'));
// });


//  output

// nextTick
// setImmediate
// setTimeout

// ⚠️ Note: Order between setImmediate and setTimeout can vary depending on system performance and timing — but nextTick always goes first.



// Use Case:
// setImmediate() is good when you want to break up CPU-heavy operations to avoid blocking the event loop, or run something after I/O.

