var User = {
    name: "",
    getUserName: function (){
        console.log(`User Name is: ${this.name}`);
    },
};

var akash = Object.create(User);               // object.create() is a way of creating a "user" type object
console.log(akash);                            
akash.name = "Akash Verma";
akash.getUserName();

var sam = Object.create(User, {                // value for the "User" type object can be passed 
    name:{value: "Sammy"},                     // during the creation of the object as passed in normal objects
    courseCount:{value: 3},
});

sam.getUserName();

var ram = new Object(User);                    // "new" can also be used to create an object but 
ram.name = "Ram";                              // it won't work without the object keyword invoked
ram.getUserName();


