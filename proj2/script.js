const red = document.querySelector(".red");                // "queryselector function" goes into the HTML document 
const cyan = document.querySelector(".cyan");              // and "searches" and "returns" the "reference" of the   
const violet = document.querySelector(".violet");          // "class" passed as a "variable" with the "function" 
const orange = document.querySelector(".orange");          // at the time of its declaration in the "JS file"
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);


const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;   
};                                                                     
// "getComputedStyle" is a "function" that goes into a "division" of a "HTML document" then "searches" and                                                        
// "returns" the "subElement" like "backgroundColor" and many other properties of the "class" of an "element" 
// in an "HTML document" and "returns" the "data" stored in it or referenced for that "element" through a file                                                        

// var color = getBGColor(pink);

pink.addEventListener('mouseenter', () => {   // "addEventListner function" is used to "assign" an "event" on 
    center.style.background = color;          // an "action" that we do on a "webpage" with mouse and keyboard
});

const magicColorChanger = (element, color) => {
    return element.addEventListener('mouseenter', () => {
        center.style.background = color;                    // "stlye" is a "default function" that you can use to
    });                                                     // "assign" any "stlye elements" to a "class element"  
};

magicColorChanger(red, getBGColor(red));
magicColorChanger(orange, getBGColor(orange));
magicColorChanger(pink, getBGColor(pink));
magicColorChanger(cyan, getBGColor(cyan));
magicColorChanger(violet, getBGColor(violet));