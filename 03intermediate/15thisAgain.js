console.log(this);

var user = {
    firstName: "Akash",
    courseCount: 4,
    
    getCourseCount: function () {
        console.log("Line 7 : ",this);
       
        function sayHello() {
            console.log("Line 9, Hello", this);    // In such cases "this" keyword gives us the global reference
        }                                          // as the function call was a regular one and not an object one
        sayHello();                                // such calls will refer to the global inference on "this" 
    },
};

user.getCourseCount();           // function call through an object

function sayHello(){
    console.log("Hello");
}

sayHello();                     // regular function call