console.log(name);

let name = "Akash";

if (true){
    var lastName = "Verma";
}

console.log(lastName);        // "var" is still accessible as it doesn't treat the scope of "if" as local

if (true){
    let lastNameTwo = "sammy";
}

console.log(lastNameTwo);     // "let" is not accessible here as it treats the scope of "if" as local