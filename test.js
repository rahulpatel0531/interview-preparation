

// What is the difference between == and === in JavaScript?
// == is the loose equality operator, which checks for equality after type conversion.
// === is the strict equality operator, which checks for both value and data type, without converting types.



// ✅ Q3: What is the difference between == and === in JavaScript?

// **var** is function-scoped. If declared outside a function, it becomes global. It can be re-declared and updated, which can lead to unexpected bugs.
// **let** and **const** were introduced in ES6 and are block-scoped (limited to the {} they are defined in).
// **let** can be updated but not re-declared in the same scope.
// **const** is also block-scoped, but its value cannot be reassigned once defined. However, for objects and arrays, you can still modify the contents.


// ✅ Q5: How does the event loop work in Node.js?

// The event loop is a core mechanism in Node.js that allows it to handle non-blocking asynchronous operations using a single-threaded architecture.

// It continuously runs in a loop and checks different phases in the Node.js runtime (like Timers, I/O callbacks, Idle/Prepare, Poll, Check, and Close callbacks) to execute the corresponding callbacks from their respective queues.

// For example, when an asynchronous task like a file read or setTimeout is triggered, the event loop ensures the callback is executed after the task is completed — without blocking the main thread.

// This is what allows Node.js to handle many concurrent operations efficiently even though it's single-threaded.
