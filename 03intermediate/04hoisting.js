// global context is always running for the entirety of the code and
// execution context only gets active for an executlable line or block of code
// global context scans entirety of the code in real time so that 
// any undefined variable is given the undefined value and any function 
// can be made available for the entire body of code which allows us to use 
// a function anywhere in the program


// var num = 2;

// function sayMe() {
//     console.log("sayMe");}

// sayMe();

tipper("100");

function tipper(a){
    var bill = parseInt(a);          // "parseInt" is a pre-defined function which passes only
    console.log(bill+5);             // integer value even from a string which only has numbers 
}
 
tipper(5);    
tipper("50");
// tipper("a"); - this gives an error as the string can't be converted into a integer

// this will give an error as the global context still doesn't know that bigTipper is a function 
// as bigTipper was defined as a variable and execution context can't find an unavailable function
// bigTipper(100);

var bigTipper = function bigTipper(a){
    var bill = parseInt(a);
    console.log(bill+15);
}

bigTipper(100);

// console.log(name); - this gives the value of name as undefined as name is yet to be defined.

var name = "Akash"; // this is a global variable and will not change inside a function 

console.log(name);


function sayName(){
    var name = "Mr. A";  // this can only stay within the scope of this function and is a local variable 
    console.log(name);   
}

sayName();

console.log(name);
