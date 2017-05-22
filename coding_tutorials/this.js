'use strict';

// Example 1
console.log(this); // What this returns depends on the environment it is being run in 

// Example 2 
function myFunc() {
    console.log(this); // Again what is returned depends on where it is run
}

myFunc();

// Example 3 -> method involcation
var obj = {
    someFunc: myFunc
}

obj.someFunc(); //you are executing the myFunc function from above with 'this' being the obj object

// Example 4 -> Apply & bind  -> not sure what these are doing
// Bind:
var newFunc = myFunc.bind('Charlie');
newFunc();

// Apply:


// Example 5 -> OOP constructor new 
var thing = new myFunc(); // thing is an instance of myFunc therefore this applies to the object thing