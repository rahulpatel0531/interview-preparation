// process.nextTick()

// process.nextTick() is a function in Node.js that allows you to schedule a callback function to be executed after the current operation completes but before the event loop continues.


// console.log('Start');

// process.nextTick(() => {
//   console.log('Inside nextTick');
// });

// console.log('End');


// output

// Start
// End
// Inside nextTick


// process.nextTick()	Immediately after current function, before event loop continues
// setImmediate()	On the next iteration of the event loop
// setTimeout(fn, 0)	After at least a 0ms timer delay, i.e., future event loop phase



