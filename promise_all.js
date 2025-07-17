// The Promise.all() method returns a single promise that resolves when all the input promises have been resolved. The returned promise resolves to an array of the results of the input promises:


// the Promise.all() waits for all the input promises to resolve and returns a new promise that resolves to an array containing the results of the input promises.

// the Promise.all() is useful to aggregate the results from multiple asynchronous operations.


// The Promise.all() method accepts a list of promises and returns a new promise that resolves to an array of results of the input promises if all the input promises are resolved, or rejected with an error of the first rejected promise.





const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise has resolved');
        resolve(10)
    }, 1 * 1000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second promise has resolved');
        resolve(20)
        // reject('Failed');

    }, 2 * 1000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The third promise has resolved');
        resolve(30)
    }, 3 * 1000);
})

Promise.all([p1, p2, p3]).then((results) => {
    const total = results.reduce((accumulator, currentValue) => accumulator + currentValue)
    console.log(`Results: ${results}`);
    console.log(`Total: ${total}`);
}).catch((error) => {
    console.log('Error:rrr', error);
})