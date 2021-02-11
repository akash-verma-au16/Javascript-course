// var sayHello = function (){
//     console.log("Hello");
//     console.log("Hello Again");
// };                                       // Functional Programming - Functions are treated as first class citizens


// function sayHello (){
//     console.log("Hello");
//     console.log("Hello Again");
// }
// sayHello();                             // typical examples of a function which needs to be called

(function (){                              // these functions are not called anywhere and execute themselves
    console.log("Hello");                  // right after the end of the function invocation
    console.log("Hello Again");            // SEAF - Self Executing Annonymous Function 
})();                                      // IIFE - Immediately Invoked Function Expression 