const akash = {
    firstName : "Akash",
    lastName : "Verma",
    role: "Admin",
    getInfo : function () {
        console.log(`
            First name is : ${this.firstName}
            Last name is : ${this.lastName}
            His role is : ${this.role}
            and he is studying courses : ${this.courses}
            `);
    },
};

const dj = {
    firstName : "Rock",
    lastName : "DJ",
    role : "Sub-Admin",
    courseCount : 4,
};

akash.getInfo();
dj.getInfo();

var djInfo = akash.getInfo.bind(dj)();           // "bind" gives a reference back which needs to be run 
//                                               // afterwards by using "()" and used by the function as 
var djInfo = akash.getInfo.bind(dj);             // data for the variables used in the function
djInfo();

akash.getInfo.call(dj);                         // "call" simply runs the function with the reference of the 
//                                              //  variables of "dj" as data for the getinfo function



