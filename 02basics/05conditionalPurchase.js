var isLoggedIn=true;
var isEmailVerified=true;
var cardInfoVerified=false;

// if(isLoggedIn)
// {
//     if(isEmailVerified)
//     {
//         if(cardInfoVerified)
//         {
//             console.log("You can make a purchase.");
//         }
//         else
//         {
//             console.log("Please verify your card details before making a purchase");
//         }
//     }
//     else
//     {
//         console.log("Please verify your email before making a purchase.");
//     }    
    
// }
// else
// {
//     console.log("Please login to your account to make a purchase");
// }

if(isLoggedIn&&isEmailVerified&&cardInfoVerified)
{
    console.log("You are ready to make a purchase");
}
else
{
    console.log(`
    To make a purchase:
    1. You need to be logged in.
    2. Your email needs to be verified.
    3. Your card info needs to be verified.
    `);
}