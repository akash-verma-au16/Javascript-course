var user = {
    firstName : "Akash",
    lastName : "Verma",
    role : "Admin",
    loginCount : 32,
    facebookSignedIn : true,
    courseList : [],
    buyCourse : function (courseName) {
        this.courseList.push(courseName);   // "push" inserts the value into the array at ascending indexes 
    },                                      // it doesn't delete the previously stored value when given another
    getCourseCount : function () {
        return `${this.firstName} is enrolled in a total of ${this.courseList.length} courses`;
    },
    info : function () {
        for (const i in this) {                     // "for-in" loop takes the "i" value as the elements in 
            console.log(`${i} : ${this[i]}`);       // the objects one by one untill it reaches the last element 
            if(i == "courseList")
                break;                              
        }    
    },
};

var courseList = true;

console.log(user.getCourseCount());

user.buyCourse("React JS course");
console.log(user.getCourseCount());

user.buyCourse("Angular JS course");
console.log(user.getCourseCount());

user.info();