var isLoggedInFromGoogle=true;
var isLoggedInFromFaebook=true;
var isLoggedInFromEmail=true;

if(isLoggedInFromGoogle||isLoggedInFromFaebook||isLoggedInFromEmail)
{
    console.log("Login Successful.");
}
else
{
    console.log("Please login form one of the modes.");
}