const uno = () => {
    return "I am One";
};

// const dos = () => {
//     setTimeout(() => {
//         return "I am Second";
//     }, 3000); 
// };

const tres = () => {
    return "I am Third";
};

const dos = () => {
    return new Promise( (resolve, reject) => {  // a "promise keyword" lets the "execution context" know that some 
        setTimeout(() => {                      // code in its "block" will be executed at the time of loading via
            resolve("I got that");              // browser as it might be sourcing some data from an external file 
        }, 3000);                               // and when sourcing happens successfully the "promise function" is 
    });                                         // considered to have been "resolved" and everythig works fine but
};                                              // when it is "rejected" the code execution shows an error

const callMe = async () => {                    // "async function" allows the "JavaScript" to execute a  
    let valOne = uno();                         // "Promise function" while allowing the rest of the code to 
    console.log(valOne);                        // execute parallely and it also lets the "Promise keyword" to  
    //                                          // hold an operation which will be either "resolved" or "rejected"
    //                                          // during the execution and loading of "JavaScript" in the browser
    
    let valTwo = await dos();                   // "await function" allows the "execution context" to be held    
    console.log(valTwo);                        // untill an "intended operation" is completed and only after the 
    //                                          // operation is finished, does it allow the "execution context"  
    //                                          // to go on ahead to execute the rest of the code in the file 
    //                                          // if an "await function" is being called it needs to be called 
    //                                          // in an "async function" due to its setup in "JavaScript"
    let valThree = tres();
    console.log(valThree);
}

callMe();