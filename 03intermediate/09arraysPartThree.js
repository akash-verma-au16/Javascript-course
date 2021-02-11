var testArray = [2, 4, 6, 3, 1, 5, 9, 8];

console.log(testArray.fill("h", 2, 5)); // "fill" is used to fill a particular string in several places in the array 
//                                      // ("h", 2, 5) here "2" & "5" are stating from where and   
//                                      // till how many numbers to replace with the element "h"
// and

const myNumber = [23, 24, 25, 34, 42, 55, 434, 4, 45];

const result = myNumber.filter( (num) => num != 55 && num != 34); 
console.log(result);                  // "filter" is used to filter the operation on the basis of a
console.log(myNumber);                // condition which all the elements of the array are checked upon
//                                    // but "filter" doesn't change the array itself just filters out 
//                                    // the elements which doesn't satisfy the condition stated in its invocation
const resultTwo = myNumber.filter( (num) => num > 55);
console.log(resultTwo);

const resultThree = myNumber.filter( (num) => num < 55 && 34 < num );
console.log(resultThree);

var users = ["ted", "sam", "tom", "sanjay", "tj"];
console.log(users.slice( 1, 4 ));          // "slice" also doesn't change the array itself but doesn't return the 
console.log(users);                        // elements of the indexes passed as values at its invocation

users.splice(1,2,"hi");                   // "splice" changes the array permanently as it deletes the consecutive 
console.log(users);                       // elements whose index range is passed as the first two values at its 
//                                        // invocation and replaces it with strings passed as the third or more 
users.splice(1,2,"hi","bye");             // consecutive values passed subsequently its during invocation
console.log(users);