function init(){                      // #2 // the execution context comes here to invoke the function "init()"
    var firstName = "Akash";          // #3 // this line gets executed next 
    function sayFirstName (){         // #5 // function gets called next
        console.log(firstName);       // #6 // last execution line and the statement is logged 
    }
    sayFirstName();                   // #4 // this function call is executed next
}

init();                               // #1 // only executable line of code at the start
