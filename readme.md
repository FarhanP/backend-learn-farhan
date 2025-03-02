**Notes for Node.js and Express Framework**

## Basics of Node.js 🚀

> Node - Getting started

    - Node.js is a runtime Env. for JS
    - Allows you to run JS outside a browser 🌏
    - Can talk to native machine because it combined built with C++
    - Event-driven architecture.
    - Can be used to drive multi-thread
    - Window and Browser objects like alert, and DOM are removed from V8 Engine (for Node.js environment)

> Node - Modules

    - A similar group of functions can be modularised into different files.
    - Can be imported via import ❌ - require() - ✔
    - Multiple ways to export a function in the module
        1. module.exports = {function1, funtion2, ...}
        2. module.fnName = () => {}
        3. Use the first one if you have a lot of functions.
    - Node provides a lot of built-in packages such as
    crypto, file system, etc.

> File Modules (fs)

    - The fs module is used for file system operations
    - The fs module is a synchronous module, it blocks the execution of the code until the operation is
    - We can read, write, delete(unlink), create directory copy and append data into a file
    - It can be done async or sync
       1. Sync fs operation returns that can be stored in a variable
       2. Async does not return anything and expects callback to be passed where we can do error handling as well

> How Node works?

    - NodeJS bindings (Node API) helps V8 engine (code) to communicate with Operating
    system to perform various opeations such as API call or reading/writing files.
    - Libuv - Async I/O (Made in C++) - helps perform asynchronous operations.
    - If there are many requests, NodeJS bindings will put each task in the event queue.
    - As in the JS, event loop will make sure it processes each task from the event queue by continuosly checking.
    - Before processing, event loop will check first whether the task is blocking or non-blocking operation.
        1. If the task is non-blocking operation, then it is executed immediately.
        2. If its blocking, it passes the tasks to worker threads that is later on performed one by one and once all the tasks in worker thread is completed, then worker thread places a callback event in the event queue and then as usual the event loop process it to the application/console.
        3. Default Thread pool size = 4 and max threads = #-core CPU

> HTTP Server

    - The http.createServer() method is used to create an HTTP server.
    - It listens for incoming requests and executes a callback function.
    - The server.listen(8000, callback) method starts the server and makes it accessible on port 8000.
    - The server listens for incoming requests and places them in an event queue.
    - The event loop processes each request based on whether it's blocking or non-blocking.
    - Logging is done asynchronously using the fs module to avoid blocking other requests.

> Handling URLs in Node

    - A URL consists of different parts:
        1. Domain → http://localhost:8000/
        2. Pathname → /about (Identifies the specific page/resource)
        3. Query Parameters → ?name=John&age=25 (Provides additional data in key=value format)
        4. Protocol → http & secured version → https
        5. Nested Pathname → about/john

> HTTP Methods

    There are five commonly seen types of HTTP methods in a request
        1. GET → Retrieve data from the server (e.g., fetch user details).
        2. POST → Send new data to the server (e.g., add a new user).
        3. PUT → Replace existing data with new data (e.g., update an entire user profile).
        4. PATCH → Modify a specific part of existing data (e.g., update only the user’s email).
        5. DELETE → Remove data from the server (e.g., delete a user).

> Express vs Node.js

    - An unopinionated framework for Node.js
    - Less and clean code with handlers such as routing, type of request and query  parameters
    - Provides easy database integration with mongoose, sequelize, etc.
    - Rapid development, scalable web apps & APIs

> Versioning in Node.js

    - For example, there is a node version: 4.18.2
        * first part -> 4 (Major release)
        * second part -> 18 (bug fix - recommended/security fix )
        * third part -> 2 (minor and optional update)
    - ^4.18.2 -> here the caret sybmbol means do not upgrade to the major release
    - ~4.18.1 -> here this symbol means do not upgrade to the bug fix release (second part)

> REST API

    - A represntational state that has its own standards
    - The standard format is JSON that is used to send data between server and client and the reason being because client should not be dependent on server and vice versa, the client can be a cross-platform like browser, IoT device, Mobile App etc.
    - HTTPS methods should be respected (use proper type of requests).
