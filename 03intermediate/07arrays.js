// var name;
// var name2;
// var name3;

var countries = ["India","USA","Japan","Russia"];

// console.log(countries);

var states = new Array("Rajasthan","Delhi","Mumbai","Assam");

// console.log(states[0]);

// console.log(states.length);

states[0] = "Punjab";

// console.log(states);

var user = ["Akash", "aksh@123.dev",3,34,true];

console.log(user);

user.pop();                              // "pop" deletes the last element from array
user.pop();
console.log(user);
user.unshift("NEW VALUE");               // inserts "new value" to the front of the array  
console.log(user);                       // and shifts the rest of the elements ahead in the array
user.shift();                            // deletes the first element from the array and shifts the
console.log(user);                       // rest of the elements to start from the start of the array

console.log(user.indexOf(3));            // "indexOf" is used to reference the element by its position in the array

console.log(Array.from("Akash"));        // "from" is used to convert the elements of a string into an array

console.log(Array.from("123456"));