var name = "Akash";                        // scope of the global variable is throughout of the program

console.log("Line number 3",name);

function sayName(){
   var name = "Mr. A"                     // scope of the local variable is limited 
    console.log("Line number 7",name);
    sayNameTwo();

    function sayNameTwo(){
        var name = "Mr.V"                 // scope of the local variable is limited 
        console.log("Line number 12",name);
    }
}
sayName();
