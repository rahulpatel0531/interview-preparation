
// A Promise is a special object in JavaScript that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Essentially, a Promise is a placeholder for a value that is not yet available but will be in the future.

// Promise States
// A Promise can be in one of three states:

// Pending: The initial state, where the asynchronous operation is still running.
// Fulfilled: The operation completed successfully, and the Promise is now resolved with a value.
// Rejected: The operation failed, and the Promise is settled with a reason (usually an error).


// Basic Syntax of a Promise

// const myPromise = new Promise((resolve, reject) => {
//   const success = true;
//   if (success) {
//     resolve('Operation was successful!');
//   } else {
//     reject('Something went wrong.');
//   }
// });


// Handling Promises with .then(), .catch(), and .finally()

// .then() is used to handle a fulfilled Promise and access its result.
// .catch() is used to handle a rejected Promise and catch any errors that may occur.
// .finally() is used to handle a settled Promise, regardless of whether the Promise resolved or rejected.

// const myPromise = new Promise((resolve, reject) => {
//     const success = true;

//     if (success) {
//         resolve('Operation was successful!');
//     } else {
//         reject('Something went wrong.');
//     }
// });

// myPromise
//     .then(result => {
//         console.log(result); // This will run if the Promise is fulfilled
//     })
//     .catch(error => {
//         console.error(error); // This will run if the Promise is rejected
//     })
//     .finally(() => {
//         console.log('The promise has completed'); // This will run when the Promise is settled
//     });



// Using Async/Await with Promises

// Async/Await is the best ways to work with Promises in modern JavaScript. This allows you to write asynchronous code that looks synchronous, making it much easier to read and maintain.

// async is used to define a function that returns a Promise.
// await is used inside an async function to pause execution until a Promise settles.


// async function performTasks() {
//   try {
//     const result1 = await promise1;
//     console.log(result1); // 'First task completed'

//     const result2 = await promise2;
//     console.log(result2); // 'Second task completed'
//   } catch (error) {
//     console.error(error); // Catches any rejection or error
//   }
// }

// performTasks();




//==========================================================================================================

// Advanced Promise Methods

// Promise.all()

// Promise.all() method accepts an array of Promises and returns a new Promise that resolves once all the Promises are fulfilled. If any Promise is rejected, Promise.all() will immediately reject. However, even if rejection occurs, the Promises continue to execute. When handling a large number of Promises, especially in batch processing, using this function can strain the system's memory.


// const { setTimeout: delay } = require('node:timers/promises');

// const fetchData1 = delay(1000).then(() => 'Data from API 1');
// const fetchData2 = delay(2000).then(() => 'Data from API 2');

// Promise.all([fetchData1, fetchData2])
//   .then(results => {
//     console.log(results); // ['Data from API 1', 'Data from API 2']
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });


//==========================================================================================================

// Promise.allSettled()

// Promise.allSettled() method waits for all promises to either resolve or reject and returns an array of objects that describe the outcome of each Promise.

// const promise1 = Promise.resolve('Success');
// const promise2 = Promise.reject('Failed');

// Promise.allSettled([promise1, promise2]).then(results => {
//   console.log(results);
//   // [ { status: 'fulfilled', value: 'Success' }, { status: 'rejected', reason: 'Failed' } ]
// });


//==========================================================================================================


// Promise.race()

// Promise.race() method resolves or rejects as soon as the first Promise settles, whether it resolves or rejects. Regardless of which promise settles first, all promises are fully executed.

// const { setTimeout: delay } = require('node:timers/promises');

// const task1 = delay(2000).then(() => 'Task 1 done');
// const task2 = delay(1000).then(() => 'Task 2 done');

// Promise.race([task1, task2]).then(result => {
//   console.log(result); // 'Task 2 done' (since task2 finishes first)
// });


//==========================================================================================================


// Promise.any()

// Promise.any() method resolves as soon as one of the Promises resolves. If all promises are rejected, it will reject with an AggregateError.

// const { setTimeout: delay } = require('node:timers/promises');

// const api1 = delay(2000).then(() => 'API 1 success');
// const api2 = delay(1000).then(() => 'API 2 success');
// const api3 = delay(1500).then(() => 'API 3 success');

// Promise.any([api1, api2, api3])
//   .then(result => {
//     console.log(result); // 'API 2 success' (since it resolves first)
//   })
//   .catch(error => {
//     console.error('All promises rejected:', error);
//   });

/////======================================================================================================

// Promise.reject() and Promise.resolve()

// These methods create a rejected or resolved Promise directly.

// Promise.resolve('Resolved immediately').then(result => {
//   console.log(result); // 'Resolved immediately'
// });

/////======================================================================================================


// Scheduling Tasks in the Event Loop

// queueMicrotask() is used to schedule a microtask, which is a lightweight task that runs after the currently executing script but before any other I/O events or timers. Microtasks include tasks like Promise resolutions and other asynchronous operations that are prioritized over regular tasks.

// queueMicrotask(() => {
//   console.log('Microtask is executed');
// });
// console.log('Synchronous task is executed');



// process.nextTick() is used to schedule a callback to be executed immediately after the current operation completes. This is useful for situations where you want to ensure that a callback is executed as soon as possible, but still after the current execution context

// process.nextTick(() => {
//   console.log('Next tick callback');
// });
// console.log('Synchronous task executed');


// setImmediate() is used to execute a callback after the current event loop cycle finishes and all I/O events have been processed. This means that setImmediate() callbacks run after any I/O callbacks, but before timers.

// setImmediate(() => {
//   console.log('Immediate callback');
// });
// console.log('Synchronous task executed');

///=================================================================================================

// When to Use Each
// Use queueMicrotask() for tasks that need to run immediately after the current script and before any I/O or timer callbacks, typically for Promise resolutions.
// Use process.nextTick() for tasks that should execute before any I/O events, often useful for deferring operations or handling errors synchronously.
// Use setImmediate() for tasks that should run after I/O events but before timers.




