const myStates = [
    "Rajasthan", 
    "Delhi", 
    1997,
    "Assam", 
    "Tamil Nadu", 
    "Maharashtra"
];

for (const i of myStates)  // "for-of" runs the loop for the indexes of an array only in asending succession
    console.log(i);        // "for-of" takes the "i" as the elements directly for an array and runs for all of them
//                         // "for-in" can be used for arrays but it will read the index number of the array element    

const symbols = {
    yt: "Youtube",
    ig: "Instagram",
    fb: "Facebook",
    ak: "AkashVerma",
};

for (const i in symbols) {                                      // same as "for-of" but "for-in" is used for objects
    console.log(`key is : ${i} and value is : ${symbols[i]}`); // here "for-of" can't be used as it is not an array
    // console.log(i);
}