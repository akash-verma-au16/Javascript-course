// function isEven(element){                     
// var isEven = function (element){
var isEven = (element) => {             // () => {} // this is just a way to declare a function
    // if(element % 2 === 0)
    // return true;
    // else
    // return false;

    return element % 2 === 0;
}
console.log(isEven(3));


var result = [2, 4, 6, 8].every(isEven);   // "every" is used to do an event for each element of an array one by one 
console.log(result);                       // "isEven" checks for the number being even 
//                                         // and returns "true" if element is even
//or

console.log([2, 4, 6, 8].every(isEven));



var result = [2, 4, 6, 8].every( (e) => { return e % 2 === 0; } );
console.log(result);

//or

console.log( [2, 3, 6, 8].every( (e) => { return e % 2 ===0; } ) );




var result = [2, 4, 6, 8].every((e) => e % 2 === 0);
console.log(result);
// or 
console.log([2, 3, 6, 8].every((e) => e % 2 === 0));
