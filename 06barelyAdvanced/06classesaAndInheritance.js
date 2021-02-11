class User{                                // "parent class"
    constructor(name, email){          
        this.name = name;              
        this.email = email;          
    }
    #courseList = [];                      // "private variable" of the "parent class"   
    getInfo(){                             // is not accessible in a "child class"          
        return {name: this.name, email: this.email};
    }
    enrollCourse(name){             
        this.#courseList.push(name);  
    }                              
    getCourseList(){               
        return this.#courseList;   
    }  
    // static login(){                     // "static keyword" is used for a "function" in a "class" to make    
    login(){                               // sure that "login function" is not passed to the "child class"
        return "You are logged in";
    }                            
}

class SubAdmin extends User{               // "child class" - inherits - "parent class"
    constructor(name, email){
        super(name, email);                // "super function" - is used to make sure to pass the "variables"
    }                                      // that are declared in a "parent class's constructor" and are needed 
    getAdminInfo(){                        // to be declared at the time of the creation of the "objects" of a 
        return "I am sub-admin";           // "class" and as the "class SubAdmin" is inheriting the "class User"  
    }                                      // as a "child" of the "class User" so it shares all the "object"  
    //                                     // properties and the "public members" of the "parent User class"
    
    login(){                               // "login function" is having same name as a "public function" of the 
        return "Login for admin only";     // "parent class User", so when invoked with "SubAdmin class's object"
    }                                      // it calls the "function" from the "SubAdmin class" as "JavaScript"  
}                                          // helps in recogonizing of the "local superiority" when the "names"  
//                                         // of the "inherited members" from the "parent class" are same as the 
//                                         // "local members" in the "child class"

module.exports = User;

const rock = new User("Rock", "Rock@rock.com");      
// console.log(rock.getInfo());                   
rock.enrollCourse("Angular Bootcamp");         
// console.log(rock.getCourseList());              
       

const tom = new SubAdmin("tom", "tom@jerry.com");
console.log(tom.getAdminInfo());
// console.log(tom.login());
console.log(tom.login());
console.log(tom.getInfo());
