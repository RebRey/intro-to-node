# intro-to-node

## Background:
JavaScript is a high-level programing language that executes synchronously (code is executed line by line). Asynchronous code can be implemented so that some block of code can be executed along with the original code thread so that the execution of the code can be done in parallel. To implement asynchronous code, **callbacks** and **promises** can be used. 

## What are callbacks?:
Callbacks are functions that are passed inside the arguments of other functions, this procedure is valid in JavaScript because functions are objects and objects can be passed as arguments to functions.

## When are callback functions used?
Callbacks functions are used to acquire control over the sequence of execution. Generally, functions are executed on the basis of the sequence that they are invoked, not on the sequence in which they are defined.

## What are promises?
A promise is an object and is something that is done/completed in the future. In JavaScript, it is exactly the same as in real life.

## When are promises used?
In Node.js applications, it’s not unusual to see a large number of nested callback functions being used to accomplish several activities. This is commonly referred to as callback hell, as it can make the code extremely complicated and disorganized.


helpful website for reference:
(https://linuxhint.com/callback-promise-javascript-examples/#:~:text=A%20callback%20function%20is%20passed,constructor%20to%20initialize%20a%20promise.)

(https://blog.logrocket.com/guide-promises-node-js/#:~:text=Promises%20can%20be%20used%20to,can%20result%20in%20callback%20hell).)
