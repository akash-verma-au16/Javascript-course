var user="Test Prep";

switch (user) {
    case "Admin":
        console.log("Full Access.");
        break;
    case "Sub Admin":
        console.log("Access to create/delete courses.");
        break;
    case "Test Prep":
        console.log("Access to create/delete tests.");
        break;
    case "User":
        console.log("Access to consume content.");
        break;  

    default:
        console.log("Trial user.");
        break;
}