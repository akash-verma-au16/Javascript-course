// import User from "./06classes.js";        // in this case this is not going to work and reason was not told 

const User = require("./06classesExplaination.js");            // a "class" declared in some other file was 
//                                                             // referenced in this file
const akash = new User("Akash", "akash@dev");                  // we created an "object" of the "class" "User"

console.log(akash.getInfo());              // now "object" "akash" can use all the functions of the "class" "User"
console.log(akash.getInfo().email);        // we can also chain a variable directly but it is not recommended

akash.enrollCourse("ReactJS Bootcamp");
akash.enrollCourse("AngularJS Bootcamp");
console.log(akash.getCourseList());

let courses = akash.getCourseList();

courses.forEach( c => console.log(c));     // here we have used this concept to show that we are accessing
//                                         // the class variable and are able to get the values stored
//                                         // in a class object in some other program file and using and 
//                                         // performing some operations on the data in the current file
//                                         // this is just to show the way to take data from a database 