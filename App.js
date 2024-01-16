import React from "react";
import ReactDOM from "react-dom/client";

//JSX Babel(transpiled before it reaches the JS engine) - PARCEL-Babel

//React Element
const Title = () => <h1 id="jsx">Namaste react using React!</h1>;

//functional components
const FunctionalComponents = () =>(
    <div id="container">
        <Title />
        <h1 id="heading">Namaste React from functional components</h1>
    </div>
);
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionalComponents/>);