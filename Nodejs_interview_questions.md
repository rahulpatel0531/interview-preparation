
1. What is the diffrence between setImmediate() and process.nextTick()?
    process.nextTick(): process.nextTick() is executed on the current iteration of the event loop, after the current operation ends/completes. This means it will always execute before setTimeout and setImmediate.

    process.nextTick() invoke immediately after the current operation completes, before moving to the next phase in the event loop:

    setImmediate() is a executed in the next iteration of the event loop.

2. Explain the Event loop in Node.js?

    The event loop is the mechanism in Node.js that handles asynchronous operations like callbacks, timers, and I/O operations. It allows Node.js to perform non-blocking operations on a single thread.

    Phases of Event Loop:
    Timers – executes setTimeout() and setInterval().
    Pending Callbacks 
    Idle, Prepare
    Poll – retrieves new I/O events.
    Check – executes setImmediate().
    Close Callbacks

3. How does Node.js handle asynchronous operations?

    Node.js uses the event-driven architecture and callback/event loop mechanism to handle asynchronous tasks like I/O, file system, database operations, etc., without blocking the main thread.

    Example:
    const fs = require('fs');

    fs.readFile('file.txt', 'utf8', (err, data) => {
        if (err) return console.error(err);
        console.log(data);
    });
    console.log('Reading file...');

4. What are streams in nodejs and types of streams?
    Streams are objects in Node.js that let you read data or write data continuously. It’s useful for handling large files or data transfers.

    Types of Streams:
        Readable – Stream you can read from (e.g., fs.createReadStream)
        Writable – Stream you can write to
        Duplex – Both readable and writable (e.g., sockets)
        Transform – Duplex but can also modify the data (e.g., compression)

    Example
        const fs = require('fs');
        const readStream = fs.createReadStream('file.txt', 'utf8');

        readStream.on('data', (chunk) => {
            console.log('New chunk:', chunk);
        });    


5. How do you handle exceptions in asynchronous code?
    * Callback error handling:
        fs.readFile('file.txt', (err, data) => {
        if (err) return console.error('Error:', err);
            console.log(data);
        });

    * Using try-catch in async/await:
        async function readFile() {
            try {
                const data = await fs.promises.readFile('file.txt', 'utf8');
                console.log(data);
            } catch (err) {
                console.error('Error:', err);
            }
        }

6. What is clustering in nodejs and how does it help?
    Clustering allows you to create child processes (workers) that share the same server port, helping to utilize multiple CPU cores to improve performance.

    const cluster = require('cluster');
    const http = require('http');
    const numCPUs = require('os').cpus().length;

    if (cluster.isMaster) {
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    } else {
    http.createServer((req, res) => {
        res.end(`Handled by worker ${process.pid}`);
    }).listen(3000);
    }


7. Explain middleware in Express.js?
    Middleware are functions that process incoming requests in Express. They can:

        Modify request/response
        End the request-response cycle
        Call the next middleware

    const logger = (req, res, next) => {
        console.log(`${req.method} ${req.url}`);
        next(); // Pass to next middleware
    };

    app.use(logger)    

8. How to secure a nodejs application?
    Validate & sanitize user input (avoid XSS, SQL Injection)
    Use helmet to set secure HTTP headers:
        const helmet = require('helmet');
        app.use(helmet());

    Use environment variables for secrets
    Rate limiting to prevent brute force:
        const rateLimit = require('express-rate-limit');
        app.use(rateLimit({ windowMs: 1 * 60 * 1000, max: 100 }));


9. Difference between require() and import?
        require : CommonJS (default in Node.js)	
        import : ES6 Modules

10. What is the purpose of package.json?
    package.json is the manifest file that contains metadata for your Node.js project. It defines:

    Project name, version
    Dependencies
    Scripts
    Author, license, etc.

11. Which phase executes first: timers or check?
    Timers phase comes first in the event loop. However, setImmediate() can execute before setTimeout() depending on the context.

12. What is an Event in Node.js?
    an event is a signal that something has happened. Node.js uses events to handle asynchronous operations using the Event-Driven Architecture.

13. What is EventEmitter in Node.js?

    EventEmitter a class in the events module that allows objects to communicate via emitting (Emit (trigger) events) and listening (Listen to events using .on() or .once()) to named events, following an event-driven model.



14. What is event driven architecture?
    Event driven architecture is a software design pattern where the flow of the program execution is determined by events,
    allowing for asynchronous, non-blocking I/O and building scalable, and responsive application.


15. What is child proccesses in nodejs?
	Child process allow nodejs to handle multiple task concurrently by creating subproccesses that can run independently.




 setTimeout() vs setImmediate() will always be executed before any timers if scheduled within an I/O cycle, independently of how many timers are present.


 

Any function passed as the setImmediate() argument is a callback that's executed in the next iteration of the event loop.

How is setImmediate() different from setTimeout(() => {}, 0) (passing a 0ms timeout), and from process.nextTick() and Promise.then()?

A function passed to process.nextTick() is going to be executed on the current iteration of the event loop, after the current operation ends. This means it will always execute before setTimeout and setImmediate.

A setTimeout() callback with a 0ms delay is very similar to setImmediate(). The execution order will depend on various factors, but they will be both run in the next iteration of the event loop.

A process.nextTick callback is added to process.nextTick queue. A Promise.then() callback is added to promises microtask queue. A setTimeout, setImmediate callback is added to macrotask queue.

Event loop executes tasks in process.nextTick queue first, and then executes promises microtask queue, and then executes macrotask queue.