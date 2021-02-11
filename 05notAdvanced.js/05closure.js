// function init(){
//     var firstName = "Akash";
//     console.log("I am in it.");
//     function sayFirstName (){
//         console.log(firstName);          // this is going to return the address of the function to the variable
//     }                                    // wherever it is called essentially turning it into a function itself
//     return sayFirstName;                 // which can be called as a normal function by the variable name
// }

// var value = init();                      // the return statement is storing the address of the  
//                                          // function sayFirstName to the variable value
// value();                                 // here the variable "value" is being used as a function

function doAddition(x){
    return function(y){
        return x+y;                         // similarly here the entire function is being returned entirely
    }
}

var add5 = doAddition(4);
add5(5);

console.log(doAddition(5)(4));              // we can also stack the passing values for both at once with 
// doAddition()()()  // known as Curring    // the superior function 
