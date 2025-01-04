import React from "react";
import ReactDOM from "react-dom/client";


// ReactElement(Object) => HTML(Browser Understands)
const parent = React.createElement("div", {id: "parent"},

    React.createElement("div", {id: "child"}, [
        // React.createElement("h1", {id: "heading"}, "i'm an h1 tag")

            // To create more than one sibling we have to use an array
            React.createElement("h1", {}, "i'm an h1 tag"), 
            React.createElement("h2", {}, "i'm an h2 tag")
         // nested react elemenet
    ])
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // it is just putting parent(object) inside div's root tag 

// we wil use JSX so that we can make it easy the above react code for creating tags

// const heading = React.createElement("h1", { id: "heading"}, "Hello World from React!"); // created h1 tag

//         const root = ReactDOM.createRoot(document.getElementById("root")); // created root inside react

//         console.log(heading); //object

//         root.render(heading); // lastly rander the heading in react