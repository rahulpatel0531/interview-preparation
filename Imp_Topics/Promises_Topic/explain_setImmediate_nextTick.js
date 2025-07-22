// Any function passed as the setImmediate() argument is a callback that's executed in the next iteration of the event loop.

// How is setImmediate() different from setTimeout(() => {}, 0) (passing a 0ms timeout), and from process.nextTick() and Promise.then()?

// A function passed to process.nextTick() is going to be executed on the current iteration of the event loop, after the current operation ends. This means it will always execute before setTimeout and setImmediate.

// A setTimeout() callback with a 0ms delay is very similar to setImmediate(). The execution order will depend on various factors, but they will be both run in the next iteration of the event loop.

// A process.nextTick callback is added to process.nextTick queue. A Promise.then() callback is added to promises microtask queue. A setTimeout, setImmediate callback is added to macrotask queue.

// Event loop executes tasks in process.nextTick queue first, and then executes promises microtask queue, and then executes macrotask queue.


const baz = () => console.log('baz called from setImmediate');
const foo = () => console.log('foo called from nextTick');
const zoo = () => console.log('zoo called from nextTick');
// const aaz = () => console.log('aaz called from timeout');
const start = () => {
    console.log('start');
    setImmediate(baz);
    // setTimeout(aaz);
    new Promise((resolve, reject) => {
        resolve('bar');
    }).then(resolve => {
        console.log(resolve);
        process.nextTick(zoo);
    });
    process.nextTick(foo);
};
start();