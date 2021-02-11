var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count = 1;

setInterval(() => {                // "setInterval function" goes into the "event loop" and keeps on  
    if (count < 1000)              // executing its "block" after the fixed mentioned "interval" again 
    {                              // and again which we pass as a "variable" in the "function declaration"  
        count++;                   // it keeps on working untill it is exited by a "code" inside its "block"
        counter.innerText = count; // it also follows the "JavaScript's" property of "not blocking" the 
    }                              // "execution context" untill mentioned deliberately and if not mentioned the
}, 1);                             // "execution context" puts this function into force and allows it to work   
//                                 //  parallely as it goes ahead to execute the rest of the code in the file

setTimeout(() => {
    followers.innerText = "Followers on Instagram!"; // "setTimeout function" goes into the "event loop" and
}, 4300);                                            // holds the execution of its "block" for the time which  
//                                                   // is passed as a "variable" in the "function declaration" 
//                                                   // and it also follows the "JavaScript's" property of 
//                                                   // "not blocking" the "execution context" untill mentioned 
//                                                   // deliberately and if not mentioned the "execution context"
//                                                   // puts this "function" into force and allows the "function"  
//                                                   // to work parallely as it goes on ahead to execute the rest  
//                                                   // of the code remaining in the "JavaScript" file