fetch("https://api.chucknorris.io/jokes/random")         // "fetch" is a "pre loaded function" that is used to get an "API data" through  
    //                                                   // a "promise function" which is inbuilt into a "console" to run the "JavaScript"
    .then( (response) => {                               
        return response.json();                          // "json function" is used to get the "response" from an "API" in "Json format" 
    })                                                   // "Json format" is the most used method of handelling of "API data" now-a-days
    .then((data) => {
      //  console.log("DATA is:", data);
      var joke = data.value;                             // "data" is a "pre loaded function feature" that is used to retreive a specific
      console.log("joke:", joke);                        // property from the "response" that an "API" is giving to a "fetch request"
    })
.catch();                                                // "catch function" is used to retreive the "final response" from an ongoing
//                                                       // "fetch API request" in a "script" it denotes the ending of a "fetch request"

// .promise() // always has a "promise" which "returns" a "response" of either "resolved" or "rejected" 
//            // the "response" goes to a subsequent "then funtion" where an operation is performed on it
// .then()    // a then function can also "return" something which is passed on to the next "then statement"
// .then()    // and further actions can be chained to continue onwards for as many operations as we need
// .catch()   // "catch function" is used to "catch" the "final response" from the "then operations"

// try{             // a "try and catch function chain" can be used to make a "troubbleshoot" like feature 
// }catch(error){   // based on the "feedback error" that the "first catch" might receive to solve "errors"
// }                // was not told on how to handle it or on how will it work syntacticaly in the "script"