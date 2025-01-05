import React from "react";
import ReactDOM from "react-dom/client";


// React Element

// React.createElement => Object => HTMLElement(render)

const heading = React.createElement("h1", {id: "heading"}, "React");

//  JSX - it is not HTML in javascript. it looks html-like or xml-like syntax
// it is transpiled(complied or converted into browser's understanding lang) before it reaches the JS - by parcel - by babel

//JSX =>Babel transpiles it to React.createElement =>ReactElement-JS Object =>HTMLElement(render)

const jsxheading = <h1 id="heading" classname="head">React 2</h1>; // if it is in one line than it is perfect jsx

// const jsxheading = (<h1 id="heading" classname="head">
    // React 2 
    //  </h1>); // if it is not in one line than it needs to be under ()

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);
// root.render(heading);






// React Component
//1- class based components - old way
//2- functional components - new way

// React Functional Component -starts with cap letter ex=const Heading
// const HeadingComponent = () => {
//     return <h1>React functional component</h1>;
// };

// const HeadingComponent = () => <h1>React functional component</h1>; // both are same

const Title = () => {
 <h1>React by me</h1>
}; // we can use normal function as well arrow function is in trend so we are using it

//component composition
const HeadingComponent = () => {
    <div id="container">
        <Title /> 
            <h1>React functional component</h1>
    </div>
};
// this <Title /> can be written as this  <Title></Title> as well
// or you can call {Title()} to use it
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />); //this is how component rendered 


// you can inject any js in jsx - just by using {}
// const number = 100;
// const HeadingComponent = () => {
//     <div id="container"> 
//         {100 +200} this is how you can inject in js in jsx
//         {number};
// same with ReactElement use {jsxheading};
//             <h1>React functional component</h1>
//     </div>
// };