const courses = [
    {
        name : "Complete ReactJS course",
        price: "2.3",
    },
    {
        name : "Complete AngularJS course",
        price: "2.1",
    },
    {
        name : "Complete MERN course",
        price: "2.8",
    },
    {
        name : "Complete C++ course",
        price: "2.9",
    },
    {
        name : "Complete Django course",
        price: "2.4",
    },
];

// <></>        // this much is done by invoking "createElement"
// #1 // <li></li>    // "li" was passed with the "createElement" "function" so it was passed to the element 

// #2 // <li class="list-group-item"></li>  // "class" was injected into the "li" element by referencing 
//                                          // "li.class.add()" and passing the element of the class as a variable
// #3 // Complete ReactJS course            // this text node was created and stored into the variable "name"
// #4 // <...>Complete ReactJS course<.../> // the previously created textnode was passed to the "li" element

function generateList (){
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";                   // to reset the previous calling and making sure of no duplication happens

    courses.forEach( course => {

        const li = document.createElement("li");             // #1
        li.classList.add("list-group-item");                 // #2

        const name = document.createTextNode(course.name);   // #3 
        li.appendChild(name);                                // #4

        const span = document.createElement("span");
        span.classList.add("float-right");

        const price = document.createTextNode("$" + course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);
    });
}

// generateList();                                // normal function call (not generally called as this)

window.addEventListener("load", generateList);    // no need to run "generateList" as a function
//                                                // as "addEventListner" will do it automatically

const button = document.querySelector(".sort-btn");
button.addEventListener("click", () => {
    courses.sort( (a, b) => a.price - b.price );   // sorting the elements based on price using inbuilt sort method
    generateList();                         // the sort happened but it is not impplemented as the addition of the
});                                         // function happened already and we need to add the sorted values again
