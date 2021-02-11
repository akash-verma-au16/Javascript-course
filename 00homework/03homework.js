var user = {
    firstName : "Akash",
    lastName : "Verma",
    role : "Admin",
    loginCount : 32,
    facebookSignedIn : true,
    courseList : [],
    buyCourse : function (courseName) {
        this.courseList.push(courseName);
    },
    info : function () {
        for (const i in this) {
            console.log(`${i} : ${this[i]}`);
            if(i == "courseList")
            { break; }
        }    
    },
};

var courseList = true;

user.buyCourse("React JS course");
user.buyCourse("Angular JS course");

user.info();