var returnedValue = Math.max(2, 4, 5, 7, 34, 6354, 34, 434);    // "Math" function is used to perform  
console.log(returnedValue);                                     // any mathematical operation

var myObj = {};                                          // we can create an empty "object" initially

Object.assign(myObj, {a:1, b:2, c:3}, {z:7, y:8, z:9});  // and "assign" its values later on in the program
console.log(myObj);                                      // "assign" syntax must have an "object" as the 
//                                                       // first passed value and the consecutive passed values  
//                                                       // will be the elements you want to add into the "object"
//                                                       // the elements will be inside {} and can be more than one
var myObjTwo = {                                              
    notEmpty : "something",                              // "assign" operation can be done on "objects"   
};                                                       // which already contain some elements 

Object.assign(myObjTwo, {newElement:"new"});
console.log(myObjTwo);

function sumOne(a, b){         // a normal "fuction" reciving two variables at invocation
    return a+b;
}

var myA = [5,4];              // a simple "array" containing two elements 

console.log(sumOne(5, 4));    // calling will work as it satisfies the format of the "function" declaration
console.log(sumOne(5, 4, 2)); // it will work but the "function" will only accept the first two values and   
//                            // ignore the last or any consecutive value after the required no. of values
// console.log(sumOne(myA));  // this will not work as the required "datatype" is not same as the one being passed
//                            // so this will give output as "5,4undefined" 

console.log(sumOne(...myA));  // "spread" operator // it takes the group and breaks it into seperate elements 
//                                                 // it also works on objects the same too 
//                                                 // but here the function will only take the no. of elements  
//                                                 // which were declared at its invocation and    
//                                                 // also they need to be of the same datatype
  
function sumTwo(...args){       // in case of using the "spread" operator in function declaration it means that                       
    let sum = 0;                // you are not sure on how many values will be coming in during the function call
    for (const arg of args) {   // here we used a "for-of" loop as we expect an "array" to be coming in at the call 
        sum += arg;
    }
    return sum;
}

console.log(sumTwo(2, 3));               // these consecutive elements are treated as an "array"
console.log(sumTwo(2, 3, 5));            // so here all these elements are converted 
console.log(sumTwo(2, 3, 5, 7, 8, 5));   // into an "array" through "spread" operator

var myB = [5, 3, 4, 6, 8];
var myC = [6, 7, 4, 0];

// console.log(sumTwo(myB));             // we can not pass an "array" straight forward as it will not 
// console.log(sumTwo(myB, myC));        // workout the array elements will just be printed as is and will   
//                                       // not be added even if we pass multiple arrays or a single array  
console.log(sumTwo(...myB));             // so we have to send an "array" as a "spread" operator only

function sumThree(a, b, ...args){        // the "spread" operator is used as a third variable and                       
    let sum = 0;                         // first two are hard coded to be accepted seperately and    
    let multi = a * b;                   // the rest of the elements being passed are being converted 
    // for (const arg of args) {         // into an "array" and are stored in "args" as an "array"  
    //     sum += arg;                   // only and can be used to perform any function of an "array" 
    // }
    args.forEach(arg => {                // we can also use "for-each" loop to do the same  
        sum += arg;                      // function as now the variable "args" can be used 
    });                                  // exactly as an "array" for performing any operation
    return [sum, multi];
}

console.log(sumThree(3, 4, 1, 1, 1, 1)); // here the first two values will be passed as elements for
//                                       // variables "a" and "b" and all further values will be  
//                                       // passed as "array" elements through the "spread" operator