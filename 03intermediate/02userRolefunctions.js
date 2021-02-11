
// function getUserRole(name,role){

var getUserRole = function (name,role){
    switch (role) {
        case "admin":
            return `${name} is admin, gets all access`;
            
        case "subadmin":
            return `${name} is subadmin, access to edit courses`;
            
        case "testprep":
            return `${name} is testprep, access access to edit tests`;
            
        case "user":
            return `${name} is user, access access to consume courses`;                        
        
        default:
            return `${name} is a trial user`;
    }
}

console.log(getUserRole("Akash","user"));

var getRole=getUserRole("Akash","admin");
console.log(getRole);