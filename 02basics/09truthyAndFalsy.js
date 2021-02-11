var user=null;

if(user)
{
    console.log("condition is true.");
}

user="null";

if(user)
{
    console.log("condition is true.");
}

user="";

if(user)
{
    console.log("condition is true.");
}

user="2";

if(2==user)
{
    console.log("true-1");
}

user="2";

if(2===user)
{
    console.log("true-2");
}