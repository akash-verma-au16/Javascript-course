const uno = () => {
    console.log("I am One");
};

const dos = () => {
    setTimeout(() => {             // "setTimeout Function" will put its "block" in the "execution context"
        console.log("Hi");         // and move forward to execute the rest of the code in the "event loop" 
    }, 3000);                      // as there is yet no code stopping the "execution context" to go forward 
    console.log("I am Second");    // with the "event loop". "Event loop" - it is the subsequent code in a
};                                 // program which is the "execution context" and as unlike other languages
//                                 // "JavaScript" never blocks the "execution context" unless done deliberately

const tres = () => {
    console.log("I am Third");
};


uno();
dos();
tres();