
/// a promise is an object that encapsulates the result of an asynchronous operation.

// A promise object has a state that can be one of the following:

// Pending ( indicating that the asynchronous operation is in progress.)
// Fulfilled with a value (The fulfilled state indicates that the asynchronous operation was completed successfully:)
// Rejected for a reason (The rejected state indicates that the asynchronous operation failed.


// The Promise.all() method returns a single promise that resolves when all the input promises have been resolved. The returned promise resolves to an array of the results of the input promises:


// the Promise.all() waits for all the input promises to resolve and returns a new promise that resolves to an array containing the results of the input promises.

// the Promise.all() is useful to aggregate the results from multiple asynchronous operations.



let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let sum = 100 + 200;
        resolve(sum)
        reject("Can not calculate")
    }, 1000)
})

// promise1.then((result) => {
//     console.log('result', result);
// }).catch((error) => {
//     console.log('Error', error);
// })

// Example  Using callback

// function getUsers(callback) {
//     let users = [];
//     setTimeout(() => {
//         callback([
//             { username: 'john', email: 'john@test.com' },
//             { username: 'jane', email: 'jane@test.com' },
//         ]);
//     }, 1000)
// }

// function findUser(username, callback) {
//     getUsers((users) => {
//         let user = users.find(user => user.username == username)
//         callback(user);
//     });
// }

// findUser('john', console.log);


/// Promise syntax

// const promise = new Promise((resolve, reject) => {
//     // Do operation

//     // retrun the state
//     if (success) {
//         resolve();
//     } else {
//         reject()
//     }
// })

// promise.then(onfulfilled, onrejected)

// promise.catch(onRejected);

// Internally, the catch() method invokes the then(undefined, onRejected) method.



// Example Using Promise

let success = true;

function getUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve([
                    { username: 'john', email: 'john@test.com' },
                    { username: 'jane', email: 'jane@test.com' },
                ]);
            } else {
                reject('Failed to load user list.')
            }

        }, 1000)
    })
}

const promise = getUsers();
promise.then((users) => {
    console.log('Users', users);
}
    // , (error) => {
    //     console.log('Error: ', error);
    // }
)
    .catch((error) => {
        console.log('Catch Error:', error);
    })
    .finally(() => {
        console.log('Asynchrous operation completed using promise.');
    })






