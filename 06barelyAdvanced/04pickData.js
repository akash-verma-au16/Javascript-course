const user = ["Akash", 3, "Admin"];
console.log(user[1]);                     
var role = user[2];                      // storing the elements of the array into variables can be done 
var name = user[0];                      // traditionaly like this but the code gets longer by this method
var [name, courseCount, role] = user;    // this is a much better alternative for accessing the elements of the 
console.log(role);                       // array but here we need to make sure that the "datatype" on "RHS" should
//                                       // be the same as the "datatype" on the "LHS" (i.e. inside the array)
const myUser = {
    name : "Akash",
    courseCount : 3,
    role : "Admin",
};

console.log(myUser.courseCount);

const {name, courseCount, role} = myUser;   // in case of the same in objects the is done like this with {}
console.log(courseCount);


const {name, myCourseCount, role} = myUser; // but here one problem is that if the "index name" of the element is 
console.log(myCourseCount);                 // not the same as the one in the object it will not work like here 
//                                          // "myCourseCount" gives "Undefined" as the result as it can't find a 
//                                          // "index name" "myCourseCount" inside the object "myUser"
