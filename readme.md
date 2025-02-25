**Notes for Node.js and Express Framework**

## Basics of Node.js 🚀

> Node - Getting started

    - Allows you to run JS outside a browser 🌏
    - Can talk to native machine because it combined built with C++
    - Node.js is a runtime Env. for JS
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
       2. Async does not return anything and expects a callback to be passed where we can do error handling as well
