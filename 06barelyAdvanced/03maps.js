var myMap = new Map();            // Maps are similar to objects but different in some operation and application

myMap.set(1, "Uno");             // "set" is a method of putting in "keys" and "values" inside a Map 
myMap.set(2, "Dos");             // similarly "get" can be used to retrieve the "values" from a Map
myMap.set(3, "Tres");
myMap.set(4, "Cuatros");

// console.log(myMap);


// for(let key of myMap.keys()){
//     console.log(`Key is ${key}`);
// }

// for(let value of myMap.values()){
//     console.log(`Value is ${value}`);
// }

for(let [k, v] of myMap)                              // when two elements are asked in "for-of" it  
    console.log(`Key is ${k} and Vlaue is ${v}`);     // gives the "keys" first and the "values" second


// myMap.forEach( (key) => console.log(`${key}`) );      // here even if its written as variable "key"
//                                                       //  "forEach" will give the "value" first
// myMap.forEach( (value) => console.log(`${value}`) );

myMap.forEach( (v, k) => console.log(`Value is : ${v} and Key is : ${k}`) );   // here when we ask for two elements 
//                                                                             // it will value as the first one
//                                                                             // and key as the second one  


myMap.delete(2);                         // "delete" erases the "value" at "key" that is passed at its invocation
console.log(myMap);