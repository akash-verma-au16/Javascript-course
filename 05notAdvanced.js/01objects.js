var User = function (firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function (){
        console.log(`Course Count is: ${this.courseCount}`);
    };
};

User.prototype.getFirstName = function (){                      // "prototype" creates a sub-function of a
    console.log(`your First Name is : ${this.firstName}`);      // previously created function outside of 
};                                                              // the scope of the previously created function

var akash = new User("Akash", 2);              // "new" is another way to make "akash" as a new "User" function
akash.getCourseCount();

if (akash.hasOwnProperty("firstName")){        // hasOwnProperty searches the newly created function akash
    akash.getFirstName();                      // for an attribute by referencing
}
// console.log(akash);

var sam = new User("Sam", 1);
sam.getCourseCount();
sam.getFirstName();
// console.log(sam);