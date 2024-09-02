import React from "react";
import ReactDOM from "react-dom/client";
   
// JSX (transpiled before it reaches thr JS)  - PARCEL - Babel

// React.createElmenet ==> object ==> HTMLElement(render)

   // React Element

   const elem = <span>React Element</span>
     const Title = ()=> (   // Arrow function is a good way to declare function
        <h1 className="head" tabIndex="5">
           
          Namaste React using JSX🧨
          {elem}   
        </h1>);

 // JSX - HTML - like or XML- like  syntax
 const number = 10000;


const HeadingComponent = () => (      //  React Functional Component
    <div id = "container">
        {Title()}        <Title></Title>
      <h2>{console.log(100+2000-200)}</h2>      
      <h1 className="heading"> Namaste React Functional component🎈</h1>
      
   </div>
); 
 

console.log(HeadingComponent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);               