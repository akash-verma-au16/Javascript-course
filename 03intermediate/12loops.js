for (let i = 0; i < 10; i++) {
    console.log(i);   
} 

const myStates = [
    "Rajasthan", 
    "Delhi", 
    1997,
    "Assam", 
    "Tamil Nadu", 
    "Maharashtra"
];

for (let i = 0; i < myStates.length; i++) {
    if (typeof myStates[i] === "string")            // "typeof" generates the data type of the  
    console.log(myStates[i]);                       // value written in fornt of it as a variable
}

let i = 0;

while (i < myStates.length){
    console.log(myStates[i]);
    i++;
}

do{
    console.log(myStates[i]);
    i++;
}while (i < myStates.length);

