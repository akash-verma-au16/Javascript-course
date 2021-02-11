// export class User{      // this can also be done to export the class to be available to use in other files
//                         //  but we need to do some other things as well with this (not recommended)


class User{
    // name = "";                    // it can be both be declared and left undeclared as it doesn't  
    // email = "";                   // make a differnce in javascript and is preffered undeclared
    // in a "class" we also don't need to give "datatypes" for the "variables" during their declaration

    constructor(name, email){        // "constructors" will have "variables" inside them which you need to set   
        this.name = name;            // at the time of creationg "objects" of the "class" and these "variables"  
        this.email = email;          // are passed as we pass values for a "function" during calling the "function"
    }

    #courseCount = [];               // now this has become a "private" "variable" of this "class" and   
    //                               // can only be used inside the "scope" of the "class" like inside  
    //                               // the "functions" of the "class"

    
    
    setPrivateValue(value){              // this is a true example of a "setter function"
        this.#courseCount.push(value);   // it is storing a value in the "private variable" 
    }                                    // of the "class" which can't be done through "object"

    getPrivateValue(){                   // this is a true example of a "getter function"
        return this.#courseCount;        // it is retrieving a value in the "private variable"
    }                                    // of the "class" which can't be done through "object"



    courseList = [];                 // this is a "public "variable" for this "class" which can be directly  
    //                               // called by referencing the "variable" through any "object" of the "class"
    // in a "class" we also don't need to give "datatypes" for the "variables" during their declaration
    
    
    getInfo(){                                       // no need to use the keyword "function", it can be declared 
        return {name: this.name, email: this.email}; // like this in a "class" and will work absolutely fine 
    }                                                // here this is also like a "getter function" as it is
    //                                               // sending out the values of the "constructor variables"  
    //                                               // but these "variables" can also be referenced directly 
    //                                               // by the "objects" of the "class" so this here is also 
    //                                               // not a example of a true "getter function"
    
    
    enrollCourse(name){              // "setter function" - it is a "function" that helps you to input some
        this.courseList.push(name);  //                     information from the class which is "private"
    }                                // this "function" is not a "getter function" itself as it is not accessing a
    //                               // "private" member of the "class" neither "variable" nor a "function"
    //                               // a "setter function" will generally be recieving one or more values during 
    //                               // its call to store those in the "private" "class" "variable"
    // so according to the name of the "setter function" it is generally declared with the word "set" in it 
    
    getCourseList(){               // "getter function" - it is a "function" that helps you to grab some 
        return this.courseList;    //                     information from the class which is "private"
    }                              // this "function" is not a "getter function" itself as it is not accessing a 
//                                 // "private" member of the "class" neither "variable" nor a "function"
//                                 // a "getter function" will generally be returning one or more values during its
//                                 // execution as it needs to send out values of the "private" "class" "variable"
// so according to the name of the "getter function" it is generally declared with the word "get" in it
}


// let akash = User("Akash", "akash@dev");    // we don't use it like this but can be done and won't give an error



module.exports = User;




const rock = new User("Rock", "Rock.com");      // here the "constructor" "variables" were passed along 
console.log(rock.getInfo());                    // with the creation of the "object" "rock"
rock.enrollCourse("Angular Bootcamp");          // a public "variable" was called directly by referencing
//                                              // it thorough an "object" of the "class User"      



console.log(rock.getCourseList());              // these two statements are giving the exact same result right
console.log(rock.courseList);                   // now but if the "variable" "courseList" was private it would  
//                                              // not be accesssible from the "object" itself directly


rock.courseList = "Public Member Course";       // directly referencing the "public variable" of the "class" 
console.log(rock.courseList);                   // through "object" and it doesn't give any error in operation


rock.setPrivateValue("Private Course");         // accessing and operating the "private variable" through 
console.log(rock.getPrivateValue());            // "getter and setter function" of the "class"

// rock.#courseCount =  "private Course Direct";   // directly referencing the "private variable" of the "class"
// console.log(rock.#courseCount);                 // through "object" and it gives the error as for the global 
// 